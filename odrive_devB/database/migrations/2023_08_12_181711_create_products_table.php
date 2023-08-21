<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('category_id');
            $table->string('name');
            $table->string('type');
            $table->text('description');
            $table->double('price');
            $table->integer('stock');
            $table->boolean('prescription_required')->default(false);
            $table->string('for_whom')->nullable(); // Pour qui
            $table->boolean('pregnancy_compatible')->nullable(); // Compatibilité avec la grossesse
            $table->boolean('breastfeeding_compatible')->nullable(); // Compatibilité avec l'allaitement
            $table->string('form')->nullable(); // Forme
            $table->string('short_description', 255)->nullable();
            $table->foreign('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
