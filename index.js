var randomnumber1 = Math.floor(Math.random() * 6 + 1);
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomdicesource = "./images/" + randomdiceimage;
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", randomdicesource);

var randomnumber2 =Math.floor(Math.random()*6+1);
var randomdiceimage2 =   "dice" + randomnumber2 + ".png";
var randomdicesource2 = "./images/" + randomdiceimage2;
var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", randomdicesource2);

if(randomnumber1 > randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML=("Player 1 won");
}
else if(randomnumber1 < randomnumber2){
    document.querySelectorAll("h1")[0].innerHTML=("Player 2 won");
}
else{
    document.querySelectorAll("h1")[0].innerHTML=("Draw");
}