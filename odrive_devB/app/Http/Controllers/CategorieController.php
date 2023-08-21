<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategorieController extends Controller
{
    //
    public function listProductsByCategory($type,$categorie=null){
        $categories = Categorie::where("type", $type)->get();
        $products = Product::where("type", $type);
    //    dd(request()->query('orderBy'));
      // dd($products->links());
        $param = "";
        $search  = "";
        if($categorie){
            $products = $products->where('category',$categorie);
        }
        if(request()->query('orderBy') == 'new'){
          $products = $products->orderBy('id','DESC');
          $param = 'new';
        }
        if(request()->query('orderBy') == 'old'){
          $products = $products->orderBy('id','ASC');
          $param = 'old';
        }
        if(request()->query('orderBy') == 'hight-to-low'){
          $products = $products->orderBy('price','ASC');
          $param = 'hight-to-low';
        }
        if(request()->query('orderBy') == 'low-to-high'){
          $products = $products->orderBy('price','DESC');
          $param = 'low-to-high';
        }
        if(request()->query('min') != null ){
          $products = $products->where('price','>',request()->query('min'));
        }

        if(request()->query('max') != null ){
          $products = $products->where('price','<',request()->query('max'));
        }

        if(request()->query('search') != null ){
          $search = request()->query('search');
          $products = $products->where('name','LIKE',$search.'%');
        }
        
        $products = $products->paginate(10);
        $path = env('URL_DASHBOARD', null);
        $path = $path . "/images/";

        return Inertia::render('categories', [
            'products' => $products,
            'categories' =>$categories,
            "path"  =>$path,
            "type"=> $type,
            'param'=>$param,
            'search'=>$search
          ]);
    }
}
