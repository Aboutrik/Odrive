<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    // public function showLogin()
    // {
    //     return Inertia::render('Auth/Login');
    // }

    public function showLogin()
    {
        if (Auth::user() == null){
            $connected = false;
        }else{
            $connected = true;
        }
        return Inertia::render('Auth/Login',['connected' => $connected, 'user' => Auth::user()]);
    }
    

    public function showRegister()
    {
        return Inertia::render('Auth/Register');
    }

    
    public function login(Request $request)
    {
        $input = $request->all();
        $remember = $request->input('remember') ?: "off";
        $remember = $remember == "on";
        if(auth()->attempt(array('email' => $input['email'], 'password' => $input['password']), $remember)) {
            return response()->json(['error' => "1",], 200);
        }else{
            return response()->json(['error' => "2", "text" => "Email-Address or Password Are Wrong"], 200);  // "Email-Address or Password Are Wrong.",
        }
    }

    // public function login(Request $request)
    // {
    //     $credentials = $request->validate([
    //         'email' => 'required|email',
    //         'password' => 'required',
    //     ]);

    //     if (Auth::attempt($credentials)) {
    //         $request->session()->regenerate();

    //         return redirect()->intended('/');
    //     }

    //     return back()->withErrors([
    //         'email' => 'Les informations d’authentification fournies ne correspondent pas à nos dossiers.',
    //     ]);
    // }

    public function register(Request $request)
    {
        $email = $request->input('email');
        $typeReg = $request->input('typeReg');
        $user = DB::table('users')->where('email', "=", $email)->get()->first();
        if ($user != null && $typeReg == "email")
            return response(['error' => '3', 'text' => Lang::get(78)]);  // This is email is busy
        if ($user != null)
            return AuthController::login($request);

        $validatedData['name'] = $request->input('name');
        $validatedData['typeReg'] = $typeReg;
        $validatedData['email'] = $email;
        $validatedData['password'] = bcrypt($request->input('password'));
        $validatedData['role'] = 4;
        $user = User::create($validatedData);
        return AuthController::login($request);
    }

    // public function register(Request $request){
    //     $request->validate([
    //         'name' => 'required|max:255',
    //         'email' => 'required|email|max:255|unique:users',
    //         'password' => 'required|confirmed|min:8',
    //     ]);

    //     $user = User::create([
    //         'name' => $request->name,
    //         'email' => $request->email,
    //         'password' => Hash::make($request->password),
    //     ]);

    //     Auth::login($user);
    //     // return redirect()->route('/');
    //      return redirect()->route('Auth/Login');
    //      //return Inertia::render('Auth/Login',['connected' => $connected]);
    // }

    public function logout(Request $request)
    {
        Auth::logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
