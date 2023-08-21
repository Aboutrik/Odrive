<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'customer_id',
        'status',
        'currency',
        'payment_method',
        'total',
        'subtotal',
        'tax',
        'shipping',
        'discount',
        'shipping_address',
        'billing_address',
    ];

    public function customer()
    {
        return $this->belongsTo(User::class, 'customer_id');
    }

  

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_product')
                    ->using(OrderProduct::class)
                    ->withPivot('quantity', 'price')
                    ->withTimestamps();
    }
}
