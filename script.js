  
let score = JSON.parse(localStorage.getItem('score')) 
||
{
wins:0,
losses:0,
tie:0
};

updateScoreElement();
//if(!score) can also be used instead of if(score===null).

/*
if(score === null)  {
score = {
wins:0,
losses:0,
tie:0
}
}
*/

function playGame(playerMove){

const computerMove = generateComputerMove();
         
let result = '';

 if(playerMove === 'scissors'){

      if(computerMove === 'rock'){
         result = 'you lose';
       }
       else if(computerMove === 'paper'){
         result = 'you won';                          
       }                                               
       else if(computerMove === 'scissors'){
         result = 'game tie';
       }


     }else if(playerMove === 'paper' ){
         
             if(computerMove === 'rock'){
               result = 'you win';
             }
             else if(computerMove === 'paper'){
               result = 'game tie';                          
             }                                               
             else if(computerMove === 'scissors'){
               result = 'you lose';
             }


      }else if(playerMove === 'rock'){
   
           if(computerMove === 'rock'){
               result = 'game tie';
             }
             else if(computerMove === 'paper'){
               result = 'you lose';                          
             }                                               
             else if(computerMove === 'scissors'){
               result = 'you won';
           }
         
         }  

         

           if(result === 'you won'){
           score.wins = score.wins + 1  ;
         }else if(result === 'you lose'){
           score.losses = score.losses + 1 ;
         }else if(result === 'game tie'){
           score.tie = score.tie + 1;
         }   


         localStorage.setItem('score',JSON.stringify(score));

         updateScoreElement();
         
         document.querySelector('.js-result').innerHTML = result;
       
         document.querySelector('.js-moves').innerHTML = `you :${playerMove}  <br> <br>computer : ${computerMove} `;

        

 

       
       }
       
     

       
       function updateScoreElement(){
         document.querySelector('.js-score')
           .innerHTML = `win: ${score.wins} losses: ${score.   losses} tie: ${score.tie}`;
         }


         
function generateComputerMove(){



let  computerMove= Math.random();


if(computerMove >0 && computerMove < 1/3){
computerMove = 'rock';
}
else if(computerMove >= 1/3 && computerMove < 2/3){
computerMove = 'paper';
}
else if(computerMove >= 2/3 && computerMove <1){
computerMove = 'scissors';
}

return computerMove;


}  