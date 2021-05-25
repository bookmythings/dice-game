
var randomNumber1 = Math.floor(Math.random() * 6)+1; //1-6
var randomImage1 = "images/dice" + randomNumber1 + ".png";//img url
document.querySelectorAll("img")[0].setAttribute("src", randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6)+1; //1-6
var randomImage2 = "images/dice" + randomNumber2 + ".png";//img url
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "🏳‍🌈Player 1 Wins !";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins ! 🏳‍🌈";
}
else {
  document.querySelector("h1").innerHTML = "Draw !";
}



























// var randomNumber1 = Math.floor(Math.random()*6)+1;// 1 -6 numbers
// var randomImage = "dice"+randomNumber1+".png"; // added img
// var imagesrc = "images/"+randomImage;
//
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", imagesrc);
//
//
// var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// var randomImage2 = "images/dice"+randomNumber2+".png";
// var image2 = document.querySelectorAll("img")[1];
// image2.setAttribute("src", randomImage2);
//
// if (randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "👏 Player 1 Wins!";
// }
// else if (randomNumber2 > randomNumber1) {
//  document.querySelector("h1").innerHTML = "Player 2 Wins! 👏";
// }
// else{
//   document.querySelector("h1").innerHTML = "Draw!";
// }
