
    <div class="container-fluid" style="background-color: RGB(136,210,197); ">
        <div class="row">
            <div class="col-lg-6 col-md-6 mt-20">
                <p style="font-size: 1.9em; font-family: tahoma, sans-serif ; color: #008080 ; line-height: normal">Vos services aussi proche de vous que jamais</p>
                <!-- @include('elements.search', array('default_tax' => "")) #440063-->
                @include('elements.searchAccueil', array('default_tax' => ""))
            </div>
            <div class="col-lg-6 col-md-6 d-flex">
                <img src="{{ asset('images/slide2.jpeg') }}" alt="" class="img-fluid d-inline w-100" style="max-width: 100%; height: 100%;">
            </div>
        </div>
    </div>