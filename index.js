var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;

var randomImage="dice"+randomNumber1+".png";
var source="./images/"+randomImage;
document.querySelectorAll("img")[0].setAttribute("src",source);

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;

var randomImage2="dice"+randomNumber2+".png";
var source2="./images/"+randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",source2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML=" 🎈 Player 1 wins!! 🎈";

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML=" 🎈 Player 2 wins!! 🎈";
    
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}