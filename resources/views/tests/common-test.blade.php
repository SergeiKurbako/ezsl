<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <link rel="stylesheet" href="../css/test.css">
</head>
<body>
<nav class="navbar clearfix">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/">LOGO</a>
        </div>
        <ul class="nav">
            <li><a href="/slotgames/public/test/elGallo">Тест 1</a></li>
            <li><a href="/slotgames/public/common-test/elGallo" class="active">Тест 2</a></li>
            <li><a href="/slotgames/public/jackpot-test/elGallo">Тест 3</a></li>
            <li><a href="/">Алгоритм</a></li>
        </ul>
    </div>
</nav>
<div class="main">
    <div class="container">
        <div class="row">
            <h1>Тест 2</h1>
            <div class="col-6">
                <div class="work_space">
                    <form action="/slotgames/public/common-test/elGallo" method="get">
                        {{ csrf_field() }}
                        <div class="row_block">
                            <div class="left_side">
                                <label for="lines">lines:</label>
                            </div>
                            <div class="right_side">
                                <input type="text" id="lines" name="linesInGame" value="{{$linesInGame}}">
                            </div>
                        </div>
                        <div class="row_block">
                            <div class="left_side">
                                <label for="bet">bet:</label>
                            </div>
                            <div class="right_side">
                                <input type="text" id="bet" name="betLine" value="{{$betLine}}">
                            </div>
                        </div>
                        <div class="row_block">
                            <div class="left_side">
                                <label for="iterations">iterations:</label>
                            </div>
                            <div class="right_side">
                                <input type="text" id="iterations" name="itr" value="{{$itr}}">
                            </div>
                        </div>
                        <div class="btn-wrap">
                            <button class="btn">Begin</button>
                        </div>
                        <div>
                            <input type="radio" id="" name="recoil" value="3" @if($recoil == 3) checked @endif>
                            97
                        </div>
                        <div>
                            <input type="radio" id="" name="recoil" value="6" @if($recoil == 6) checked @endif>
                            94
                        </div>
                        <div>
                            <input type="radio" id="" name="recoil" value="9" @if($recoil == 9) checked @endif>
                            91
                        </div>

                    </form>
                </div>
            </div>
            <div class="col-6">
                <div class="work_space">
                    iterations = {{$itr}} <br>
                    all bet = {{$allBet}} <br>
                    total balance = {{$balance}} <br>
                    total win = {{$allWinOnSlots}}<br>
                    total winnings in the main game = {{$allWinOnMainLocation}}<br>
                    total winnings in freespin = {{$freeSpinAllWin}}<br>
                    percentage of money returned on freespin = {{$freeSpinProbability2}}%<br>
                    percentage of money returned on jackpots = {{$jackpotProbability}} %<br>
                    jackpot winnings = {{$jackpotWinnings}} <br>
                    percentage of money returned = {{$probability1}} %<br>
                    percentage of money returned on main game = {{$probability2}} %<br>
                    freespin counter = {{$countFreeSpin}} <br>
                    execution time = {{$time}} сек <br>
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>