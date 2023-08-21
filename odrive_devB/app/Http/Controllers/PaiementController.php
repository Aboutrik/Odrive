<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class PaiementController
{
    public function paiement(){
        // if (!Auth::check())
        //     return \Redirect::to('/account');

        // return view('cart', [
        //     'title' => Lang::get(114),  // $title
        //     'minAmount' => DB::table('restaurants')->where("id", '1')->
        //     select('minAmount')->get()->first()->minAmount
        // ]);

        return Inertia::render('checkout');
    }
}
