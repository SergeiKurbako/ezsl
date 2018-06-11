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
                <li><a href="/slotgames/public/test/elGallo" class="active">Тест 1</a></li>
                <li><a href="/slotgames/public/common-test/elGallo" >Тест 2</a></li>
                <li><a href="/slotgames/public/jackpot-test/elGallo">Тест 3</a></li>
                <li><a href="/">Алгоритм</a></li>
            </ul>
        </div>
    </nav>
    <div class="main">
        <div class="container">
        <div class="row">                
                <h1>Тест 1</h1>
                <div class="col-6">
                    <div class="work_space">
                        <form action="/slotgames/public/test/elGallo" method="post">
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
                        </form> 
                    </div>
                </div>
                <div class="col-6">
                    <div class="work_space">
                        iterations = {{$itr}}<br>
                        all win = {{$allWinOnSlots}}<br>
                        all bet = {{$allBet}}<br>
                        percentage of money returned = {{$probability}}%<br>
                        execution time = {{$time}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>