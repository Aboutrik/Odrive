@inject('lang', 'App\Lang')
@inject('docs', 'App\Docs')

<div class="container mt-5">
<!-- <h1 style="margin-top: 15%" id="section-patner">Travailler avec <b style="color: #440063">O'drive</b></h1> -->
<h2 style="margin-top: 15%; font-family: tahoma, sans-serif" id="section-patner">Travailler avec nous</h2>
    <div class="row">
        <div class="col-lg-4 col-md-4 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header text-white text-center" style="background-color: lightseagreen; font-size: 1.5em">O'DRIVE DABALI</div> -->
                <a href="{{ route('/restaurants') }}">
                    <div class="card-body card-content">
                        <p>restaurant</p>
                        <!-- <img src="{{ asset('images/restaurant_card.jpg') }}" alt="Image 1" class="img-fluid"> -->
                    </div>
                </a>
            </div>
        </div>
        <div class="col-lg-4 col-md-4 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header text-white text-center" style="background-color: lightseagreen ; font-size: 1.5em">O'DRIVE PHARMACIE</div> -->
                <div class="card-body card-content">
                    <p>Livraison</p>
                    <!-- <img src="{{ asset('images/pharmacie_card.jpeg') }}" alt="Image 2" class="img-fluid"> -->
                </div>
            </div>
        </div>
        <div class="col-lg-14 col-md-4 mb-5 mt-5">
            <div class="card shadow">
                <!-- <div class="card-header text-white text-center" style="background-color: lightseagreen ; font-size: 1.5em">O'DRIVE GRANDE SURFACE</div> -->
                <div class="card-body card-content">
                    <p>Grande surface</p>
                    <!-- <img src="{{ asset('images/hypermarche_card.jpeg') }}" alt="Image 3" class="img-fluid"> -->
                </div>
            </div>
        </div>
    </div>
</div>

