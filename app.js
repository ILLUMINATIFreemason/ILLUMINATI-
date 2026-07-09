/*=========================================
 ILLUMINATI v2.1
 app.js - Part 1
=========================================*/

// ---------- متغیرهای اصلی ----------

let score = Number(localStorage.getItem("score")) || 0;
let invites = Number(localStorage.getItem("invites")) || 0;

// ---------- جابه‌جایی بین صفحات ----------

function showPage(pageId) {

document.querySelectorAll(".page").forEach(function(page) {
page.classList.remove("active");
});

const selected = document.getElementById(pageId);

if(selected){
selected.classList.add("active");
}

window.scrollTo({
top:0,
behavior:"smooth"
});

}

// برای سازگاری با نسخه‌های قبلی
function show(pageId){
showPage(pageId);
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

}/*=========================================
 ILLUMINATI v2.0
 app.js - Part 4 Final
=========================================*/


// ---------- کپی لینک دعوت ----------

function copyInvite(){

const inviteText =
document.getElementById("inviteText");


if(!inviteText){

return;

}


const link =
inviteText.innerText;



navigator.clipboard.writeText(link)

.then(function(){

alert("🔗 لینک دعوت کپی شد.");

})

.catch(function(){

alert("کپی لینک انجام نشد.");

});


}




// ---------- ساخت لینک دعوت کاربر ----------

function createInviteLink(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

return;

}


const user =
JSON.parse(data);



const inviteLink =
window.location.origin +
"?invite=" +
encodeURIComponent(user.name);



const box =
document.getElementById("inviteText");


if(box){

box.innerText =
inviteLink;

}

}




// ---------- بررسی دعوت ----------

function checkInvite(){

const params =
new URLSearchParams(
window.location.search
);


const inviter =
params.get("invite");



if(inviter){

console.log(
"دعوت شده توسط:",
inviter
);

}

}




// ---------- اجرای نهایی ----------

document.addEventListener(
"DOMContentLoaded",
function(){


loadUser();

loadScore();

createInviteLink();

checkInvite();


});
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

 }/*=========================================
 ILLUMINATI v2.0
 app.js - Part 4 Final
=========================================*/


// ---------- کپی لینک دعوت ----------

function copyInvite(){

const inviteText =
document.getElementById("inviteText");


if(!inviteText){

return;

}


const link =
inviteText.innerText;



navigator.clipboard.writeText(link)

.then(function(){

alert("🔗 لینک دعوت کپی شد.");

})

.catch(function(){

alert("کپی لینک انجام نشد.");

});


}




// ---------- ساخت لینک دعوت کاربر ----------

function createInviteLink(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

return;

}


const user =
JSON.parse(data);



const inviteLink =
window.location.origin +
"?invite=" +
encodeURIComponent(user.name);



const box =
document.getElementById("inviteText");


if(box){

box.innerText =
inviteLink;

}

}




// ---------- بررسی دعوت ----------

function checkInvite(){

const params =
new URLSearchParams(
window.location.search
);


const inviter =
params.get("invite");



if(inviter){

console.log(
"دعوت شده توسط:",
inviter
);

}

}




// ---------- اجرای نهایی ----------

document.addEventListener(
"DOMContentLoaded",
function(){


loadUser();

loadScore();

createInviteLink();

checkInvite();


});
// ===== سیستم امتیاز =====

let score = 0;
let invites = 0;

function updateScore() {

const scoreText = document.getElementById("userScore");
const inviteText = document.getElementById("inviteCount");
const progress = document.querySelector(".progress-fill");

if (scoreText) {
scoreText.textContent = score + " امتیاز";
}

if (inviteText) {
inviteText.textContent = invites;
}

if (progress) {
let percent = Math.min((score / 100) * 100, 100);
progress.style.width = percent + "%";
}

}

// اجرای اولیه
document.addEventListener("DOMContentLoaded", updateScore);
