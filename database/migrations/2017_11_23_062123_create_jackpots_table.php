<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateJackpotsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jackpots', function (Blueprint $table) {
            $table->increments('id');
            $table->float('mini',16,4);
            $table->float('minor',16,4);
            $table->float('major',16,4);
            $table->float('big_daddy',16,4);
            $table->float('min_mini',16,4);
            $table->float('max_mini',16,4);
            $table->float('min_minor',16,4);
            $table->float('max_minor',16,4);
            $table->float('min_major',16,4);
            $table->float('max_major',16,4);
            $table->float('min_big_daddy',16,4);
            $table->float('max_big_daddy',16,4);
            $table->integer('result_mini');
            $table->integer('result_minor');
            $table->integer('result_major');
            $table->integer('result_big_daddy');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('jackpots');
    }
}
