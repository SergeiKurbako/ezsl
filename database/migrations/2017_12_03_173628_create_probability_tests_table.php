<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProbabilityTestsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('probability_tests', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('iterations');
            $table->integer('total_bet');
            $table->integer('total_balance');
            $table->integer('total_win');
            $table->integer('total_winnings_in_the_main_game');
            $table->integer('total_winnings_in_jackpot');
            $table->integer('total_winnings_in_freespin');
            $table->float('percentage_of_money_returned', 20, 10);
            $table->float('percentage_of_money_returned_om_main_game', 20, 10);
            $table->float('percentage_of_money_returned_on_jackpots', 20, 10);
            $table->float('percentage_of_money_returned_on_freespin', 20, 10);
            $table->integer('execution_time');

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
        Schema::drop('probability_tests');
    }
}
