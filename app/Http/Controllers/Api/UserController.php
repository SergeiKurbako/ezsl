<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use App\Models\User;

class UserController extends Controller
{
    public function increaseBalance(Request $request, User $user, $banknote)
    {
        $oldBalance = User::where('name', '=', 'automata')->firstOrFail()->balance;
        User::where('name', '=', 'automata')->update(['balance' => $oldBalance + $banknote]);
    }
}
