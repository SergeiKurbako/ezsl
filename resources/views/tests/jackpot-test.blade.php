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
                <li><a href="/slotgames/public/common-test/elGallo" >Тест 2</a></li>
                <li><a href="/slotgames/public/jackpot-test/elGallo" class="active">Тест 3</a></li>
                <li><a href="/">Алгоритм</a></li>
            </ul>
        </div>
    </nav>
    <div class="main">
        <div class="container">
            <div class="row">
             <h1>Тест 3</h1>
                <div class="col-6">
                    <div class="work_space">
                        <form action="/slotgames/public/jackpot-test/elGallo" method="post" class="table_form">
                            {{ csrf_field() }}
                            <div class="row_block">
                                <div class="left_side">
                                    <label for="lines">type:</label>
                                </div>
                                <div class="right_side">
                                    <span>A</span>
                                    <span>{{floor($jackpots['mini'])/100}}</span>
                                    <input type="text" placeholder="" name="mini" value="{{$mini/100}}">
                                    <input type="text" placeholder="" name="result_mini" value="{{$jackpots['result_mini']/100}}">
                                </div>
                            </div>
                            <div class="row_block">
                                <div class="left_side">
                                    <label for="bet">current bank:</label>
                                </div>
                                <div class="right_side">
                                    <span>B</span>
                                    <span>{{floor($jackpots['minor'])/100}}</span>
                                    <input type="text" placeholder="" name="minor" value="{{$minor/100}}">
                                    <input type="text" placeholder="" name="result_minor" value="{{$jackpots['result_minor']/100}}">
                                </div>
                            </div>
                            <div class="row_block">
                                <div class="left_side">
                                    <label for="iterations">set current bank:</label>
                                </div>
                                <div class="right_side">
                                    <span>C</span>
                                    <span>{{floor($jackpots['major'])/100}}</span>
                                    <input type="text" placeholder="" name="major" value="{{$major/100}}">
                                    <input type="text" placeholder="" name="result_major" value="{{$jackpots['result_major']/100}}">
                                </div>
                            </div>
                            <div class="row_block">
                                <div class="left_side">
                                    <label for="iterations">set win value:</label>
                                </div>
                                <div class="right_side">
                                    <span>D</span>
                                    <span>{{floor($jackpots['big_daddy'])/100}}</span>
                                    <input type="text" placeholder="" name="big_daddy" value="{{$big_daddy/100}}">
                                    <input type="text" placeholder="" name="result_big_daddy" value="{{$jackpots['result_big_daddy']/100}}">
                                </div>
                            </div>

                            <div class="btn-wrap">
                                <button class="btn">Apply</button>
                            </div>
                        </form> 
                    </div>
                    <div class="work_space">
                       <form action="/slotgames/public/jackpot-probability-test/elGallo" method="post">
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
                    all win = {{$allWin}}<br>
                    percentage of money returned = {{$percentage}} %
                </div>
            </div>
        </div>
    </div>
</div>
</body>
</html>