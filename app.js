/*=========================================
 ILLUMINATI v2.0
 app.js - Part 1
=========================================*/


// ---------- صفحات ----------

const pages = document.querySelectorAll(".page");

const menuButtons = document.querySelectorAll(".menu-btn");



// ---------- نمایش صفحه ----------

function showPage(pageId){

pages.forEach(function(page){

page.classList.remove("active");

});


const selectedPage =
document.getElementById(pageId);


if(selectedPage){

selectedPage.classList.add("active");

}



menuButtons.forEach(function(button){

button.classList.remove("active");

});



const clickedButton =
event.currentTarget;

if(clickedButton){

clickedButton.classList.add("active");

}



window.scrollTo({

top:0,

behavior:"smooth"

});


}



// ---------- صفحه اول ----------

document.addEventListener(

"DOMContentLoaded",

function(){

showDefaultPage();

loadUser();

loadScore();

}

);




// ---------- صفحه پیش فرض ----------

function showDefaultPage(){

pages.forEach(function(page){

page.classList.remove("active");

});


const homePage =
document.getElementById("home");


if(homePage){

homePage.classList.add("active");

}



menuButtons.forEach(function(btn){

btn.classList.remove("active");

});


if(menuButtons.length>0){

menuButtons[0].classList.add("active");

}


}



// ---------- پیام ----------

function showMessage(text){

alert(text);

}
