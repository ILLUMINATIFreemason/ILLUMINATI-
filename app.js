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
