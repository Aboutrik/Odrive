@inject('settings', 'App\Settings')
@inject('currency', 'App\Currency')
@inject('basket', 'App\Basket')

<script>

    let _apiKey = "ZXlKMGVYQWlPaUpLVjFRaUxDSmhiR2NpT2lKSVV6VXhNaUo5LmV5SndjbTltYVd4bFgzQnJJam8zT1RBM09Dd2libUZ0WlNJNkltbHVhWFJwWVd3aUxDSmpiR0Z6Y3lJNklrMWxjbU5vWVc1MEluMC45LWZnU0NSY0VfQ1RFdC00OUhXdHlHbFJGbFNzbl8wQUpFcFJFQ3VyLWt4WlV6bmdmS3hKV3VNV3gtZmtxNHhEbzFBNFRtLVcxXy1kLTRwb1FFNVNNZw==";
    let _frame = "191358";
    let _integrationId = "202620";
    //
    //
    //
    var accessToken = "";
    var _orderId = "";

    function payMobPayment(){
        let data = `{
            "api_key": "${_apiKey}"
        }`;
        console.log('payMobPayment', data);
        $.ajax({
            headers: {
                'content-type': 'application/json',
            },
            type: 'POST',
            url: 'https://accept.paymobsolutions.com/api/auth/tokens',
            data: data,
            success: function (data){
                console.log(data);
                if (data.token != null && data.token !== ""){
                    accessToken = data.token;
                    payMobPayment2();
                }
            },
            error: function(e) {
                console.log(e);
                showNotification("pastel-danger", "{{$lang->get(89)}} Details see in console.", "bottom", "center", "", "");  // Something went wrong
            }}
        );
    }

    function payMobPayment2(){
        let prices = getPrices();
        let total = (prices._total*100).toFixed(0);
        let data = `{
                "auth_token": "${accessToken}",
                "delivery_needed": "false",
                "amount_cents": "${total}",
                "currency": "EGP"
            }`;
        console.log("payMobPayment2", data);
        $.ajax({
            headers: {
                'content-type': 'application/json',
            },
            type: 'POST',
            url: 'https://accept.paymobsolutions.com/api/ecommerce/orders',
            data: data,
            success: function (data){
                console.log(data);
                if (data.id != null && data.id !== "") {
                    _orderId = data.id;
                    payMobPayment3(total);
                }
            },
            error: function(e) {
                console.log(e);
                showNotification("pastel-danger", "{{$lang->get(89)}} Details see in console.", "bottom", "center", "", "");  // Something went wrong
            }}
        );
    }

    function payMobPayment3(total){
        let order_info = JSON.parse(localStorage.getItem("order_info")) || [];
        if (order_info.total == null)
            return;

        let data = `{
            "auth_token": "${accessToken}",
            "amount_cents": "${total}",
            "expiration": 3600,
            "order_id": "${_orderId}",
            "billing_data": {
                "apartment": "1",
                "email": "email",
                "floor": "1",
                "first_name": "userFirstName",
                "street": "2",
                "building": "2",
                "phone_number": "${order_info.phone}",
                "shipping_method": "2",
                "postal_code": "2",
                "city": "1",
                "country": "Egypt",
                "last_name": "2",
                "state": "2"
            },
            "currency": "EGP",
            "integration_id": ${_integrationId},
            "lock_order_when_paid": "false"
            }`;
        console.log("payMobPayment2", data);
        $.ajax({
            headers: {
                'content-type': 'application/json',
                'Authorization' : 'Bearer ' + accessToken
            },
            type: 'POST',
            url: 'https://accept.paymobsolutions.com/api/acceptance/payment_keys',
            data: data,
            success: function (data){
                console.log(data);
                if (data.token != null && data.token !== "") {
                    token = data.token;
                    var url = `https://accept.paymob.com/api/acceptance/iframes/${_frame}?payment_token=${token}`;
                    console.log(url);
                    //CreateOrder();
                    window.location.href = url;
                }
            },
            error: function(e) {
                console.log(e);
                showNotification("pastel-danger", "{{$lang->get(89)}} Details see in console.", "bottom", "center", "", "");  // Something went wrong
            }}
        );
    }

</script>
