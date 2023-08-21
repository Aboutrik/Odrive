<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderProduct;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class OrderController extends Controller
{
    public function createOrder(Request $request)
    {
        $order = new Order();
        $order->user_id = Auth::user()->id;
        $order->status = 'en traitement';
        $order->total_price = $request->total_price;
        $order->delivery_address = $request->delivery_address;
        $order->save();

        // You may want to iterate through the cart items and save them into the order.
        foreach ($request->products as $product) {
            $orderProduct = new OrderProduct();
            $orderProduct->order_id = $order->id;
            $orderProduct->product_id = $product['id'];
            $orderProduct->quantity = $product['quantity'];
            $orderProduct->save();
        }

     //   return Inertia::render('Orders/Success', ['order' => $order]);
    }

    public function updateOrderStatus(Request $request, $id)
    {
        $order = Order::find($id);
        if (!$order || $order->user_id !== Auth::user()->id) {
            return redirect()->route('orders.index')->withErrors(['order' => 'Order not found']);
        }

        $order->status = $request->status;
        $order->save();

        return redirect()->route('orders.view', ['id' => $order->id])->with('success', 'Order status updated successfully');
    }

    public function viewOrderDetails($id)
    {
        $order = Order::with('products')->find($id);
        if (!$order || $order->user_id !== Auth::user()->id) {
            return redirect()->route('orders.index')->withErrors(['order' => 'Order not found']);
        }

       // return Inertia::render('Orders/View', ['order' => $order]);
    }
}
