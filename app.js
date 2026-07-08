/*=========================================
 ILLUMINATI v2.0
 app.js - Part 1
=========================================*/


// ---------- صفحات ----------

const pages = document.querySelectorAll(".page");

const menuButtons = document.querySelectorAll(".menu-btn");



// ---------- نمایش صفحه ----------





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
/*=========================================
 ILLUMINATI v2.0
 app.js - Part 2
=========================================*/


// ---------- تغییر صفحه ----------

function showPage(pageId, button){

pages.forEach(function(page){

page.classList.remove("active");

});


const page = document.getElementById(pageId);

if(page){

page.classList.add("active");

}


menuButtons.forEach(function(btn){

btn.classList.remove("active");

});


if(button){

button.classList.add("active");

}


window.scrollTo({

top:0,

behavior:"smooth"

});

}



// ---------- ثبت نام ----------

function registerUser(){

const name =
document.getElementById("userName").value.trim();

const phone =
document.getElementById("userPhone").value.trim();

if(name===""){

alert("لطفاً نام خود را وارد کنید.");

return;

}


if(phone===""){

alert("لطفاً شماره موبایل را وارد کنید.");

return;

}


const user={

name:name,

phone:phone,

score:0,

level:"تازه وارد"

};


localStorage.setItem(

"illuminatiUser",

JSON.stringify(user)

);


loadUser();

alert("ثبت نام با موفقیت انجام شد.");

}



// ---------- بارگذاری اطلاعات ----------

function loadUser(){

const data=

localStorage.getItem("illuminatiUser");


if(!data){

return;

}


const user=JSON.parse(data);


const info=

document.getElementById("profileInfo");


if(info){

info.innerHTML=

`
<h3>${user.name}</h3>

<p>📱 ${user.phone}</p>

<p>🏆 امتیاز: ${user.score}</p>

<p>⭐ سطح: ${user.level}</p>

`;

}

}
/*=========================================
 ILLUMINATI v2.0
 app.js - Part 3
=========================================*/


// ---------- بارگذاری امتیاز ----------

function loadScore(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

return;

}


const user = JSON.parse(data);


const scoreBox =
document.getElementById("userScore");


if(scoreBox){

scoreBox.innerText =
user.score || 0;

}

}



// ---------- جایزه روزانه ----------

function dailyReward(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

alert("ابتدا ثبت نام کنید.");

return;

}


let user =
JSON.parse(data);



const today =
new Date().toDateString();


const lastReward =
localStorage.getItem("lastReward");



if(lastReward === today){

alert("امروز جایزه خود را دریافت کرده‌اید.");

return;

}



user.score =
(user.score || 0) + 10;



localStorage.setItem(

"illuminatiUser",

JSON.stringify(user)

);



localStorage.setItem(

"lastReward",

today

);



loadScore();

loadUser();


alert("🎁 ۱۰ امتیاز به شما اضافه شد.");

}



// ---------- افزایش امتیاز دعوت ----------

function addInviteScore(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

return;

}


let user =
JSON.parse(data);



user.score =
(user.score || 0) + 5;



localStorage.setItem(

"illuminatiUser",

JSON.stringify(user)

);



loadScore();

loadUser();

}
