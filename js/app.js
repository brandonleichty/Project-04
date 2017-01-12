"use strict";



var htmlStartSnippet = '<div class="screen screen-start" id="start">' +
                          '<header>' +
                            '<h1>Tic Tac Toe</h1>' +
                            '<a href="#" class="button" id="start-game">Start game</a>' +
                          '</header>' +
                        '</div>';


var htmlWinSnippet = '<div class="screen screen-win" id="finish">' +
                        '<header>' +
                          '<h1>Tic Tac Toe</h1>' +
                          '<p class="message"></p>' +
                          '<a href="#" class="button">New game</a>' +
                        '</header>' +
                      '</div>';


var htmlBoardSnippet = '<div class="board" id="board">' +
                        '<header>' +
                          '<h1>Tic Tac Toe</h1>' +
                          '<ul>' +
                            '<li id="player1" class="players"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-200.000000, -60.000000)" fill="#000000"><g transform="translate(200.000000, 60.000000)"><path d="M21 36.6L21 36.6C29.6 36.6 36.6 29.6 36.6 21 36.6 12.4 29.6 5.4 21 5.4 12.4 5.4 5.4 12.4 5.4 21 5.4 29.6 12.4 36.6 21 36.6L21 36.6ZM21 42L21 42C9.4 42 0 32.6 0 21 0 9.4 9.4 0 21 0 32.6 0 42 9.4 42 21 42 32.6 32.6 42 21 42L21 42Z"/></g></g></g></svg></li>' +
                            '<li id="player2" class="players"><svg xmlns="http://www.w3.org/2000/svg" width="42" height="43" viewBox="0 0 42 43" version="1.1"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-718.000000, -60.000000)" fill="#000000"><g transform="translate(739.500000, 81.500000) rotate(-45.000000) translate(-739.500000, -81.500000) translate(712.000000, 54.000000)"><path d="M30 30.1L30 52.5C30 53.6 29.1 54.5 28 54.5L25.5 54.5C24.4 54.5 23.5 53.6 23.5 52.5L23.5 30.1 2 30.1C0.9 30.1 0 29.2 0 28.1L0 25.6C0 24.5 0.9 23.6 2 23.6L23.5 23.6 23.5 2.1C23.5 1 24.4 0.1 25.5 0.1L28 0.1C29.1 0.1 30 1 30 2.1L30 23.6 52.4 23.6C53.5 23.6 54.4 24.5 54.4 25.6L54.4 28.1C54.4 29.2 53.5 30.1 52.4 30.1L30 30.1Z"/></g></g></g></svg></li>' +
                          '</ul>' +
                        '</header>' +
                        '<ul class="boxes">' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                          '<li class="box"></li>' +
                        '</ul>' +
                      '</div>';


//Have start screen appear when page loads
$('body').prepend(htmlStartSnippet);


//Hide start page and show board on button click
$('#start-game').on("click", function(){
  $('#start').hide();
  newGame();
});


function newGame(){
  //Removes board and all active players from previous game (if there was one)
  $('#board').remove();
  $('.players').removeClass('active');
  
  $('#start').after(htmlBoardSnippet);
  $('#player1').addClass('active');
};


$("body").on("mouseenter", '.box', function() {
  if ($(this).hasClass("filled") === false){
    if ($("#player1").hasClass("active")){
      $(this).addClass("hover-o");
    }
    if ($("#player2").hasClass("active")){
      $(this).addClass("hover-x");
    }
  }
});

$("body").on("mouseleave", '.box', function() {
  if ($(this).hasClass("filled") === false){
    if ($("#player1").hasClass("active")){
      $(this).removeClass("hover-o");
    }
    if ($("#player2").hasClass("active")){
      $(this).removeClass("hover-x");
    }
  }
});


//Switches the active player between X and O on box click
$('body').on('click', '.box', function(){

  if ($(this).hasClass("filled") === false) {
      if ($("#player1").hasClass("active")) {
        $(this).addClass("box-filled-1 filled o-checked");
        $("#player1").removeClass("active");
        $("#player2").addClass("active");
    } else {
        $(this).addClass("box-filled-2 filled x-checked");
        $("#player2").removeClass("active");
        $("#player1").addClass("active");
    }
  }
});
