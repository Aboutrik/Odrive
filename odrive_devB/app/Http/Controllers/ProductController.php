<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Inertia\Inertia;
use App\Models\Image;

class ProductController extends Controller
{

    
    public function listProductsByCategory($categoryId)
    {
        $products = Product::where('category_id', $categoryId)->get();

        return Inertia::render('Products/Category', ['products' => $products]);
    }

    public function viewProduct($id)
    {
        $product = Product::find($id);
        $path = env('URL_DASHBOARD', null);
        $path = $path . "/images/";
       
        $file = Image::find($product->imageid)->filename;
       
        $path = $path.$file;
       // dd($path);
        $related = Product::where('category', $product->category)->take(5)->get();
       // dd($related);
        //dd($related);
        if (!$product) {
            return redirect()->route('products.index')->withErrors(['product' => 'Product not found']);
        }
        return Inertia::render('product', ['product' => $product, "path"=> $path,"related"=> $related]);
        
    }

    public function searchProducts(Request $request)
    {
        $query = $request->get('query');
        $products = Product::where('name', 'LIKE', '%' . $query . '%')->get();

       // return Inertia::render('Products/Search', ['products' => $products, 'query' => $query]);
    }
}
