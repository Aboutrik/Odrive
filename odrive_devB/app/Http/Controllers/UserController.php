<?php
namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController extends Controller
{
 

    public function updateProfile(Request $request)
    {
        $userAuth = Auth::user();

        $user = User::where('id', $userAuth->id)->first();
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->state = $request->state;
        $user->zip_code = $request->zip_code;
        $user->country = $request->country;
        $user->save();
       // return Inertia::render('Profile', ['user' => $user])->with('success', 'Profile mise à jour avec succès');
    }

    public function viewOrders()
    {
        $user = Auth::user();
        $orders = $user->orders; // Assuming there is a relationship defined

//        return Inertia::render('Orders/Index', ['orders' => $orders]);
    }
}
