 
var alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var guessword = "";
var hint = "";

var max = 6;
var wrong = 0;
var done = 0;
var imgg = 0;

 
$(document).ready(function(){
  
  $('.alfa').click(function(){
  var selected = $(this).attr('id');
   
  for(x = 0; x < guessword.length; x++){
      
 

	  if(guessword.charAt(x) == selected){
			$('#' + x).fadeOut(200, function() {
		
		$(this).text(selected);
		
		}).fadeIn(200);
         
		 $(this).css('background', 'green');
            done++;
        }
    }
	
    if(guessword.indexOf(selected)== -1){
        $(this).css('background', 'red');
        wrong++;
		imgg = wrong;
		imgg++;
		 
		$('#HngMan').fadeOut(300, function() { 
		
		
		
		$(this).load(function() { $(this).fadeIn(300); }); 
		$(this).attr('src', './images/' + imgg + '.jpg'); 
		}); 
        
		 
		
		
		$('#wrong').text((max - wrong) + ' tries left'); 
		 
    }
    if(done == guessword.length){
        
    }
    if(wrong == max){
       
    }
  });
});

 
function showHngMan(){
	
	
document.write('<div class="HngMan"  ><img style= "width:30%;" id="HngMan" src="./images/1.jpg"/></div>');
}

function showWrongN(){
	
	
document.write('<div id="wrong">' + (max - wrong) + ' tries left</div>');
}

function showHint(){
	
	
document.write('<div id="hint">' + hint + '</div>');
}

function showGuessArea(){
  

  for(var x = 0; x < guessword.length; x++){
     


	 if(guessword.charAt(x) == ' '){
    

	document.write('<div class="guessword" id="' + x + '">&nbsp;&nbsp;</div>');
        }else{
            document.write('<div class="guessword" id="' + x + '">_&nbsp;</div>');;
        }
    }
	document.write('<br style="clear: left;" />');
}

function showAlfa(){
	document.write('<div>');
  
  for(var x = 0; x < alfa.length; x++){


		
        document.write('<div class="alfa" id="' + alfa.charAt(x) + '">' + alfa[x] + '</div>');
    }
	document.write('</div>')
}

function startGame(w,h){
	guessword = w.toUpperCase();
	hint = h;
	showHngMan();
	
	showWrongN();
	showHint(h)
	showGuessArea()
    showAlfa();
}