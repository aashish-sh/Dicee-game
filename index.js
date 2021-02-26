//image1
var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomImage = "dice"+ randomNumber1+".png";
var randomImageSource = "images/"+randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// image2
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;
var randomImage2 = "dice"+ randomNumber2+".png";
var randomImageSource2 = "images/"+randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// winner
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="Winner is Player-1" ;
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").innerText="Winner is Player-2";
}
else{
  document.querySelector("h1").innerText= "Match Draws";
}
