<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Settings;
use App\Models\Foods;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;


class SinglePageController extends Controller
{

    public function home(){
        return Inertia::render('index');
    }

    public function commande(){
        return Inertia::render('commande');
    }

    public function panier(){
        return Inertia::render('panier');
    }

    
    public function contact(){
        return Inertia::render('contact');
    }

    public function categories(){
        return Inertia::render('categories');
    }

    public function souhait(){
        return Inertia::render('souhait');
    }

    public function partenaireLivreur(){
        return Inertia::render('partenaireLivreur');
    }

//a supprimer
    public function restaurant(){
        return Inertia::render('restaurant');
    }
//a supprimer
    public function grandesurface(){
        return Inertia::render('grandesurface');
    }

    
//a supprimer
    public function pharmacie(){
        return Inertia::render('pharmacie');
    }

    //gerer lors des échanges avec la base de donné
    public function productDetails(){
        return Inertia::render('product-details');
    }

    public function foodsInfo(Request $request){
        $id = $request->input('id') ?: 0;
        //
        return response()->json([
            'food' => SinglePageController::getFood($id)
        ], 200);
    }

    public static function getFood($id){
        //
        $food = DB::table('foods')->where("foods.id", $id)->
            leftjoin("image_uploads", 'image_uploads.id', '=', 'foods.imageid')->
            select('foods.*', 'image_uploads.filename as image')->get();

        Foods::fill($food);

        return ($food != null ? $food->first() : null);
    }


    public function listProduitRestaurant(Request $request)
    {
        $search = $request->input('search') ?: "";
        return SinglePageController::getPage(1, true, 0, 0, 100000000, 0, $search, true, '0', "");
    }

    public static function getPage($page, $view, $sort, $foodMinPrice, $foodMaxPrice, $cat, $search, $home, $market, $city){
        //$path = Settings::getPath();
        // $path = env('URL_DASHBOARD', null);
        // if ($path == null)
        //     if ($view)
        //         return "Set URL_DASHBOARD variable in .env file";

        $orderby = "";
        if ($sort == 1) // by date
            $orderby = "ORDER BY updated_at DESC";
        if ($sort == 2) // by price
            $orderby = "ORDER BY price ASC";
        if ($sort == 3) // by price
            $orderby = "ORDER BY price DESC";
        $uselike = "no";
        if ($search != "")
            $uselike = "true";

        $market_search = "";
        if ($market != '0')
            $market_search = " AND restaurant=$market";

        $offset = (($page - 1) * 12);


        $query = DB::table('foods')
            ->select('foods.*', 'image_uploads.filename AS image')
            ->leftJoin('image_uploads', 'image_uploads.id', '=', 'foods.imageid')
            ->leftJoin('restaurants', 'restaurants.id', '=', 'foods.restaurant')
            ->where('foods.published', 1)
            ->where('price', '>=', $foodMinPrice)
            ->where('price', '<=', $foodMaxPrice)
            ->where('foods.name', 'like', '%' . $search . '%')
            ->where(function ($query) use ($cat) {
                $query->where('foods.category', $cat)
                    ->orWhereIn('foods.category', function ($query) use ($cat) {
                        $query->select('categories.id')
                            ->from('categories')
                            ->where('parent', $cat);
                    })
                    ->orWhereIn('foods.category', function ($query) use ($cat) {
                        $query->select('categories.id')
                            ->from('categories')
                            ->whereIn('parent', function ($query) use ($cat) {
                                $query->select('categories.id')
                                    ->from('categories')
                                    ->where('parent', $cat);
                            });
                    });
            })
            ->when($market_search, function ($query, $market_search) {
                return $query->whereRaw($market_search);
            })
            ->where(function ($query) use ($city) {
                $query->where('restaurants.city', 'like', '%' . $city . '%')
                    ->orWhere('restaurants.city', '');
            })
            ->groupBy('foods.id')
            ->orderByRaw($orderby)
            ->offset($offset)
            ->limit(12);

        $foods = $query->get();



        //$count = count(DB::select($zap));
        dd($foods);
        //dd($foods);
        // min - max
        $count2 = count($minmax = DB::select("SELECT MIN(foods.price) AS minPrice, MAX(foods.price) AS maxPrice FROM foods
                    LEFT JOIN restaurants ON restaurants.id=foods.restaurant
                    WHERE foods.published=1 AND foods.name LIKE '%$search%' AND
                     (foods.category=$cat OR foods.category IN (SELECT categories.id FROM categories WHERE parent=$cat)
                                OR foods.category IN (SELECT categories.id FROM categories WHERE parent
                                    IN (SELECT categories.id FROM categories WHERE parent=$cat)))
                                    $market_search
                                    AND (restaurants.city LIKE '%$city%' OR restaurants.city='')
                                    $orderby
                        "));
        $min = 100000000;
        $max = 0;
        if ($count2 != 0) {
            $min = $minmax[0]->minPrice;
            $max = $minmax[0]->maxPrice;
        }
        if ($min == '') $min = 0;
        if ($max == '') $max = 0;

        // fill
        $foods = Foods::fill($foods);
        // count
        if ($foods == "Set URL_DASHBOARD variable in .env file")
            $count_current = 0;
        else
            $count_current = count($foods);
        $t = $count/12;
        if ($count/12 > 0)
            $t++;
        //
        // categories
        //
        $categories = Categories::get(false);
        $catNames = array();
        $catNames = Categories::getCategoryName($categories, $cat, $catNames);
        $catNames = array_reverse($catNames);

        $marketName = "";
        if ($market != '0') {
            $ts = DB::table("restaurants")->where('id', $market)->get()->first();
            if ($ts != null)
                $marketName = $ts->name;
        }
        // subcategories
        $subcat = Categories::getCategoriesAndProductsForMainScreen($market, $cat);
        //
        if ($view) {
            if ($home) {
                $categoriesAll = Categories::getCategoriesAndProductsForMainScreen($market, '0');

                $ret = [
                    'uselike' => $uselike,
                    'cat' => $cat,
                    'foods' => $foods,
                    'count_current' => $count_current,
                    'count' => $count,
                    'page' => $page,
                    'pages' => (int)$t,
                    'min' => $min,
                    'max' => $max,
                    'catNames' => $catNames,
                    'subcat' => $subcat,
                    'subcatCount' => count($subcat),
                    'title' => Lang::get(79), // "Welcome"
                    'banners1' => ($market == '0') ? Banners::getBanners1() : [],
                    'banners2' => Banners::getBanners2(),
                    'categoriesAll' => $categoriesAll,
                    'market' => $market,
                    'marketName' => $marketName,
                ];
                return view('home', $ret);
                
            }
            return view('main', [
                'uselike' => $uselike,
                'cat' => $cat,
                'count_current' => $count_current,
                'count' => $count,
                'page' => $page,
                'pages' => (int)$t,
                'min' => $min,
                'max' => $max,
                'catNames' => $catNames,
                'subcat' => $subcat,
                'subcatCount' => count($subcat),
                'title' => Lang::get(79), // "Welcome"
                'market' => $market,
                'marketName' => $marketName,
                'foods' => $foods,
            ]);
        }else
            return response()->json([
                'uselike' => $uselike,
                'cat' => $cat,
                'foods' => $foods,
                'count_current' => $count_current,
                'count' => $count,
                'page' => $page,
                'pages' => (int) $t,
                'path' => $path,
                'min' => $min,
                'max' => $max,
            ], 200);
    }
    

}
