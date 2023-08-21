@inject('lang', 'App\Lang')

{{--10.08.2023--}}
<div class="row ml-2 p-4 border bg-light rounded">
    <div class="header-advance-searchaccueil">
        <input id="search" type="text" placeholder="Ou vous vous situez ?">  {{--Search your product--}}
        <button>
            <div class="px-0">
            <i class="fa fa-search" aria-hidden="true"></i>
                <!-- <img src="img/search.png" onclick="onSearch();" class="img-fluid" style="width: 100%;padding-bottom: 10px; padding-left: 10px; padding-right: 10px; padding-top: 5px"/> -->
            </div>
        </button>
    </div>
</div>
   
    

<script>
    var isSearch = false;
    function onSearch(){
        isSearch = true;
        console.log(document.getElementById("search").value);
        search = document.getElementById("search").value;
        if ("{{\Request::route()->getName()}}" == "/main") {
            foodMinPrice = 0;
            lastFoodMinPrice = 0;
            foodMaxPrice = 1000000;
            lastFoodMaxPrice = 1000000;
            paginationGoPage(1);
        }else
            window.location='{{route('/main')}}?search='+search;
    }

</script>
