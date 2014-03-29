var x = 0;
var allNames =new Array();
var emptyInput = false;
/*No global navbar needed for cover page*/

$(document).ready(function(){
    $("#global-nav").remove();
 //$('<li data-goto="third" class="nav"></li>').prependTo($('.StartButton'));
});

$('#digits').UIStepper({
    start: 2,
    end: 8,
    step: 1,    
    defaultValue: 2
});

$("#backButton").click(function(){

});

$("#playerNames").click(function(){
    allNames.clear;
    while(x != 0){        
        $('.comp').remove();
        x--;
    }
    x = $('label').text()[0];
    //alert(x);
    for(var i=0; i<x; i++)
    {
        $("<li class='comp'> <div> <label for='PlayerName'>Player name:           </label></div><aside> <input type='text' name='player.playername'                   autocapitalize='off' autocorrect='off' required> </aside></li>").appendTo("#hello");
    }
  //  alert(x);
});

//var myVar = setInterval(function(){checker()},10);

function checker()
{
    
}

function ticTacToe(){
 /*
 * A complete tic-tac-toe widget, using JQuery.  Just include this 
 * script in a browser page and play.  A tic-tac-toe game will be 
 * included as a child element of the element with id "tictactoe".  
 * If the page has no such element, it will just be added at the end 
 * of the body.
 */
$(function () {

    var squares = [], 
        SIZE = 3,
        EMPTY = "&nbsp;",
        score,
        moves,
        turn = "X",

    /*
     * To determine a win condition, each square is "tagged" from left
     * to right, top to bottom, with successive powers of 2.  Each cell
     * thus represents an individual bit in a 9-bit string, and a
     * player's squares at any given time can be represented as a
     * unique 9-bit value. A winner can thus be easily determined by
     * checking whether the player's current 9 bits have covered any
     * of the eight "three-in-a-row" combinations.
     *
     *     273                 84
     *        \               /
     *          1 |   2 |   4  = 7
     *       -----+-----+-----
     *          8 |  16 |  32  = 56
     *       -----+-----+-----
     *         64 | 128 | 256  = 448
     *       =================
     *         73   146   292
     *
     */
    wins = [7, 56, 448, 73, 146, 292, 273, 84],

    /*
     * Clears the score and move count, erases the board, and makes it
     * X's turn.
     */
    startNewGame = function () {
        turn = "X";
        score = {"X": 0, "O": 0};
        moves = 0;
        squares.forEach(function (square) {square.html(EMPTY);});
    },

    /*
     * Returns whether the given score is a winning score.
     */
    win = function (score) {
        for (var i = 0; i < wins.length; i += 1) {
            if ((wins[i] & score) === wins[i]) {
                return true;
            }
        }
        return false;
    },

    /*
     * Sets the clicked-on square to the current player's mark,
     * then checks for a win or cats game.  Also changes the
     * current player.
     */
    set = function () {
        
        if ($(this).html() !== EMPTY) {
            return;
        }
        $(this).html(turn);
        console.log($(this));
        moves += 1;
        score[turn] += $(this)[0].indicator;
        console.log(score[turn]);
        if (win(score[turn])) {
            alert(turn + " wins!");
            startNewGame();
        } else if (moves === SIZE * SIZE) {
            alert("Cat\u2019s game!");
            startNewGame();
        } else {
            turn = turn === "X" ? "O" : "X";
        }
    },

    /*
     * Creates and attaches the DOM elements for the board as an
     * HTML table, assigns the indicators for each cell, and starts
     * a new game.
     */
    play = function () {
        var board = $("<table border=1 cellspacing=0>"), indicator = 1;
        for (var i = 0; i < SIZE; i += 1) {
            var row = $("<tr>");
            board.append(row);
            for (var j = 0; j < SIZE; j += 1) {
                var cell = $("<td height=50 width=50 align=center valign=center></td>");
                cell[0].indicator = indicator;
                cell.click(set);
                row.append(cell);
                squares.push(cell);
                indicator += indicator;
            }
        }

        // Attach under tictactoe if present, otherwise to body.
        $(document.getElementById("tictactoe") || document.body).append(board);
        startNewGame();
    };

    play();
});

   
    
    
}


$(".StartButton").click(function(){
    
    //alert(allNames.length);
    //alert(x);
    var playerNum = 0;
    var size = allNames.length;
    
    if(!size){
    $('input').each(function(){
        var name = $(this).val();
        allNames.push(name);
        $(this).attr('id','Player' + playerNum);
        playerNum++;
        
    });
    }
    
//    alert(allNames.length);
    var y = parseInt(x, 10) +1;
   // alert(y);
    
    for(var i=1; i<=x; i++)
    {
        if(!allNames[i]){
           emptyInput = true;
            break;        
        }
    }
    if(emptyInput){
    $.UIPopup({
          id: "warning",
          title: 'Attention Players!', 
          message: 'One or more of the fields are empty. Continue to remove playes.', 
          cancelButton: 'Fill up', 
          continueButton: 'Delete Players', 
          callback: function() {
              for(var j=1; j<=x; j++){
                if(!allNames[j]){
                    allNames[j] = allNames[j+1];
                    j--;
                    x--;
                   // alert('deleted');
                }
              }
              if(x<2){alert("Too little players");window.open("index.html", "_self");}
              else{window.open("new.html", "_self");}
          }
        });
    }
    else
    {
        window.open("new.html", "_self");   
    }
});

