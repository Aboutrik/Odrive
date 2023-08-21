@inject('lang', 'App\Lang')
@inject('docs', 'App\Docs')

<html>
    @include('elements.head', array('title' => $breadcrumb))
    <style>
         .card {
            border: none;
            transition: transform 0.3s;
        }

        .card:hover{
            transform: translateY(-5px);
            color: #440063
        }
        
        /* .card-header:hover {
            color: #440063
        } */

        .card-content img {
            height: auto;
            max-width: 100%;
        }

        /* pour slide acceuil */
        .header-advance-searchaccueil {
            position: relative;
            -ms-flex-preferred-size: 50%;
            flex-basis: 50%;
            background-color: #ffffff;
            height: 50px;
            border: 1px solid #e4e4e4;
            padding-right: 55px;
            border-radius: 50px; }

        @media only screen and (min-width: 1200px) and (max-width: 1499px) {
            .header-advance-searchaccueil {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%; } }
        @media only screen and (min-width: 992px) and (max-width: 1199px) {
            .header-advance-searchaccueil {
            -ms-flex-preferred-size: 40%;
            flex-basis: 40%; } }
        @media only screen and (max-width: 479px) {
            .header-advance-searchaccueil {
            -ms-flex-preferred-size: 100%;
            flex-basis: 100%;
            margin-bottom: 15px; } }
        .header-advance-searchaccueil input {
            border: none;
            width: 95%;
            margin-top: 12px;
            margin-left: 15px;
            color: #a4a4a4; }
        .header-advance-searchaccueil button {
            position: absolute;
            right: 5px;
            top: 5px;
            background: none;
            border: none;
            background-color: #008080;
            color: #ffffff;
            width: 40px;
            height: 40px;
            border-radius: 50%; }
            .header-advance-searchaccueil button:hover {
            background-color: #5d8801; }
    </style>
<body>

<!-- le haut de la page -->
@include('elements.headerAccueil')

<!-- le slide -->
@include('elements.slideAccueil')

<!-- breadcrumb -->
 <!-- <div class="breadcrumb-area q-mb20 q-mt10">
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="breadcrumb-container">
                    <ul>
                        <li><a href="{{route('/')}}"><i class="fa fa-home q-mr10"></i>{{$lang->get(12)}}</a></li>
                        <li class="active">{{$breadcrumb}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>  -->

<div class="container mt-60">
    <div class="row">
        <!-- <h1><b style="color: #440063">O'drive</b> à votre service</h1> -->
        <h2 class="text-center" style="font-family: tahoma, sans-serif">Tous ce que vous pouvez faire</h2>
    </div>
    <div class="row">
        <div class="col-lg-4 col-md-12 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header  " style="background-color: lightseagreen; font-size: 1.5em">O'DRIVE DABALI</div> -->
                <a href="{{ route('/restaurants') }}">
                    <div class="card-body card-content">
                        <h1 class="text-center text-white" style="position: absolute">O'DRIVE DABALI</h1>
                        <img src="{{ asset('images/dabali.jpg') }}" alt="Image 1" class="img-fluid">
                    </div>
                </a>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header text-white text-center" style="background-color: lightseagreen ; font-size: 1.5em">O'DRIVE PHARMACIE</div> -->
                <div class="card-body card-content">
                <h1 class="text-center text-white" style="position: absolute">O'DRIVE PHARMACIE</h1>
                    <img src="{{ asset('images/pharmacie4.jpg') }}" alt="Image 2" class="img-fluid">
                </div>
            </div>
        </div>
        <div class="col-lg-4 col-md-12 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header text-white text-center" style="background-color: lightseagreen ; font-size: 1.5em">O'DRIVE GRANDE SURFACE</div> -->
                <div class="card-body card-content">
                <h1 class="text-center text-white" style="position: absolute">O'DRIVE GRANDE SURFACE</h1>
                    <img src="{{ asset('images/supermarche.jpg') }}" alt="Image 3" class="img-fluid">
                </div>
            </div>
        </div>
        <!-- partner part -->
        @include('elements.patner')
    </div>
</div>

<!-- Shop page container -->

<div class="shop-page-container mb-50 ">
    <div class="container ">
        @if ($page == "login")
            @include('elements.login')
        @endif
        @if ($page == "forgot")
            @include('elements.forgot')
        @endif
        @if ($page == "register")
            @include('elements.register')
        @endif
        @if ($page == "account")
            @include('elements.account')
        @endif
    </div>
</div>

<!--=====  down of page  ======-->

@include('elements.footer', array('docs' => $docs->get('0')))

<!--=====  Dialogs, elements, etc  ======-->

@include('elements.dialogDetails', array('pages' => ""))
@include('elements.wishlist', array('default_tax' => ""))

@include('elements.bottom', array())



</body>
</html>
