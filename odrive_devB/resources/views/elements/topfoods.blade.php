@inject('currency', 'App\Currency')
@inject('topfoods', 'App\TopFoods')

dd($products);
@foreach($products as $key => $data)
    @include('elements.oneItem', array('data' => $data, 'type' => $type, 'parent' => $parent))
@endforeach
