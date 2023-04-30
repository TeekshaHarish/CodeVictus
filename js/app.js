let player1=[]
let player2=[]
let currPlay=[]
isGameOver=false;
const p1=document.querySelector('#p1')
const p2=document.querySelector('#p2');
const turnNo=document.querySelector("#turnNo");
const imageHolder=document.querySelector("#imageHolder");
const p1Cards=document.querySelector("p1Cards");
const p2Cards=document.querySelector("p2Cards")
let play1Turn=true;
let play2Turn=false;
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
let deck=['1H','2H','3H','4H','5H','6H','7H','8H','9H','TH','JH','QH','KH',
'1C','2C','3C','4C','5C','6C','7C','8C','9C','TC','JC','QC','KC',
'1D','2D','3D','4D','5D','6D','7D','8D','9D','TD','JD','QD','KD',
'1S','2S','3S','4S','5S','6S','7S','8S','9S','TS','JS','QS','KS']
console.log(deck);
shuffle(deck)
//Now distribute cards to the two players
   for(let idx=0;idx<26;idx++){
    player1.push(deck[idx]);

   }
   for(let idx=26;idx<52;idx++){
    player2.push(deck[idx]);
   }

function turnchange(){
    if(play1Turn==true){
        play1Turn=false;
    play2Turn=true;
    turnNo.innerText='2';
        
    }
    else{
        play2Turn=false;
    play1Turn=true;
    turnNo.innerText='1';
    }
}



p1.addEventListener('click',function play1(){
    if(!isGameOver){
        console.log(player1);
        const cardPlayed=player1.pop();
        imageHolder.innerHTML="";
        const img=document.createElement("IMG");
            
        img.src=`cards/${cardPlayed[0]}-${cardPlayed[1]}.png`
        img.height='150';
        img.width='100';
    img.classList.add('addedImage')
    imageHolder.append(img);
        
        if(currPlay.length!==0&&cardPlayed[0]==currPlay[currPlay.length-1][0]){
            player1.concat(currPlay);
            shuffle(player1);
    
        }
        else{
            currPlay.push(cardPlayed);
            
            turnchange();
    
        }

    }
   
});
p2.addEventListener('click',function play2(){
    console.log(player2);
    const cardPlayed=player2.pop();
    imageHolder.innerHTML="";
        const img=document.createElement("IMG");
            
        img.src=`cards/${cardPlayed[0]}-${cardPlayed[1]}.png`;
        img.height='150';
        img.width='100';
    img.classList.add('addedImage')
    imageHolder.append(img);
    if(!isGameOver){
        
    if(currPlay.length!==0&&cardPlayed[0]==currPlay[currPlay.length-1][0]){

    }
    else{
        currPlay.push(cardPlayed);
        turnchange();

    }

    }
    
}
);

  

    
    










   



  





   

     
  

