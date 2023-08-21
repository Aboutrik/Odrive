<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\SinglePageController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\CategorieController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\PanierController;
use App\Http\Controllers\paiementController;
use Illuminate\Support\Facades\Artisan;
use App\Http\Controllers\MainController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/',[SinglePageController::class, 'home']);



Route::get('/login', [AuthController::class, 'showLogin'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->name('logout');

Route::get('/register', [AuthController::class, 'showRegister'])->name('register');
Route::post('/register', [AuthController::class, 'register']);

Route::get('/products/category/{categoryId}', [ProductController::class, 'listProductsByCategory'])->name('products.category');
Route::get('/products/view/{id}', [ProductController::class, 'viewProduct'])->name('products.view');
Route::get('/products/search', [ProductController::class, 'searchProducts'])->name('products.search');

Route::post('/orders/create', [OrderController::class, 'createOrder'])->name('orders.create')->middleware('auth');
Route::put('/orders/update/{id}', [OrderController::class, 'updateOrderStatus'])->name('orders.update')->middleware('auth');
Route::get('/orders/view/{id}', [OrderController::class, 'viewOrderDetails'])->name('orders.view')->middleware('auth');

Route::get('/panier', [SinglePageController::class, 'panier'])->name('panier');
Route::get('/commande', [SinglePageController::class, 'commande'])->name('commande');


Route::get('/contact', [SinglePageController::class, 'contact'])->name('contact');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

Route::get('/categories/{type}/{categorie?}', [CategorieController::class, 'listProductsByCategory'])->name('categories.types'); //grande surface, apres centraliser


Route::get('/categories', [SinglePageController::class, 'categories'])->name('categories'); //grande surface, apres centraliser

//supprimer tous les 3
Route::get('/restaurant', [SinglePageController::class, 'restaurant'])->name('restaurant');
Route::get('/pharmacie', [SinglePageController::class, 'pharmacie'])->name('pharmacie');
Route::get('/grandesurface', [SinglePageController::class, 'grandesurface'])->name('grandesurface');

Route::get('/product-details', [SinglePageController::class, 'productDetails'])->name('product-details'); //a éffacer lors de la dynamisation

Route::get('/cart', [PanierController::class, 'cart'])->name('cart'); 

Route::get('/partenaireLivreur', [SinglePageController::class, 'partenaireLivreur'])->name('partenaireLivreur'); 

Route::get('/souhait', [SinglePageController::class, 'souhait'])->name('souhait');


//Route::get('/restaurant', [SinglePageController::class, 'listProduitRestaurant'])->name('restaurant'); a revoir après




Route::get('/clear-cache', function() {
    $text = "Start...";
    Artisan::call('cache:clear');
    $text = $text . Artisan::output();
    Artisan::call('route:clear');
    $text = $text . Artisan::output();
    Artisan::call('config:clear');
    $text = $text . Artisan::output();
    Artisan::call('view:clear');
    $text = $text . Artisan::output();
    return $text;
});

Route::get('/phpinfo', function() {
    echo phpinfo();
});

//Route::get('/', [MainController::class,'choix'])->name('/');

// Route::get('/restaurants',[MainController::class,'home'])->name('/restaurants');
// Route::get('/main',[MainController::class,'main'])->name('/main');
// Route::post('/foodsGoPage',[MainController::class,'foodsGoPage']);
// Route::get('/category',[MainController::class,'category'])->name('/category');
// Route::post('/foodsInfo',[MainController::class,'category']);
// Route::post('/getBasket', [OrdersController::class,'getBasket']);
// Route::post('/addToBasket',[OrdersController::class,'addToBasket']);

// Route::get('/about', 'InfoController@about')->name('/about');
// Route::get('/delivery', 'InfoController@delivery')->name('/delivery');
// Route::get('/privacy', 'InfoController@privacy')->name('/privacy');
// Route::get('/terms', 'InfoController@terms')->name('/terms');
// Route::get('/refund', 'InfoController@refund')->name('/refund');

// Route::get('/setLang', 'MainController@setLang')->name('/setLang');
// Route::get('/foodDetails', 'MainController@details')->name('/foodDetails');

// Route::get('/account', 'AccountController@enter')->name('/account');
// Route::post('/login', 'AccountController@login')->name('/login');
// Route::get('/logout', 'AccountController@logout')->name('/logout');
// Route::get('/forgot', 'AccountController@forgot')->name('/forgot');
// Route::get('/register', 'AccountController@register')->name('/register');
// Route::post('/createUser', 'AccountController@createUser')->name('/createUser');
// Route::post('/changeProfile', 'AccountController@changeProfile')->name('/changeProfile');
// Route::post('/changePassword', 'AccountController@changePassword')->name('/changePassword');
// Route::get('/addresses', 'AddressController@get')->middleware('auth:web');
// Route::post('/addressSave', 'AddressController@save');
// Route::post('/addressDel', 'AddressController@del');

// Route::post('/doForgot', 'AccountController@doForgot');

// Route::get('/wishlist', 'WishController@wishlist')->name('/wishlist');
// Route::get('/cart', 'CartController@viewCart')->name('/cart');
// Route::get('/orderinfo', 'OrderInfoController@load')->name('/orderinfo');

// Route::get('/stripe', 'StripeController@stripe')->name('/stripe');
// Route::get('/paypalCallback', 'CompleteController@paypalCallback')->name('/paypalCallback');
// Route::get('/complete', 'CompleteController@complete')->name('/complete');
// Route::get('/completeStripe', 'CompleteController@completeStripe')->name('/completeStripe');

// // chat
// Route::get('/chat', 'ChatController@load')->name('/chat');
// Route::post('/getChatMessagesNewCount', 'ChatController@getChatMessagesNewCount');
// Route::post('/getChatMessages', 'ChatController@getChatMessages');
// Route::post('/chatSendMessage', 'ChatController@chatSendMessage');
// //
// Route::get('/chatUsers2', 'ChatController@chatUsersApi');
// Route::get('/chatMessages2', 'ChatController@chatMessages2');
// Route::post('/chatMessageSend2', 'ChatController@chatMessageSend2');

// Route::get('/shop', 'MainController@shop');
// Route::get('/PayMob', 'PayMobController@callback');


