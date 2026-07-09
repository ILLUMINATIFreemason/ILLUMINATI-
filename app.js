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
 ILLUMINATI v2.1
 app.js - Part 2
=========================================*/

// ---------- بروزرسانی امتیاز ----------

function updateScore(){

const scoreText=document.getElementById("userScore");
const inviteText=document.getElementById("inviteCount");
const profileScore=document.getElementById("profileScore");
const profileInvites=document.getElementById("profileInvites");
const progress=document.querySelector(".progress-fill");

if(scoreText){
scoreText.innerText=score;
}

if(inviteText){
inviteText.innerText=invites;
}

if(profileScore){
profileScore.innerText=score;
}

if(profileInvites){
profileInvites.innerText=invites;
}

if(progress){

let percent=Math.min(score,100);

progress.style.width=percent+"%";

}

}

// ---------- افزودن امتیاز ----------

function addScore(amount){

score+=amount;

localStorage.setItem("score",score);

updateScore();

}

// ---------- افزودن دعوت ----------

function addInvite(){

invites++;

score+=10;

localStorage.setItem("invites",invites);

localStorage.setItem("score",score);

updateScore();

}
/*=========================================
 ILLUMINATI v2.1
 app.js - Part 3
=========================================*/


// ---------- ذخیره کاربر ----------

function saveUser(){

const name =
document.getElementById("name");

const phone =
document.getElementById("phone");


if(!name || !phone){

return;

}


if(name.value.trim()==="" ||
phone.value.trim()===""){

alert("لطفاً اطلاعات را کامل وارد کنید.");

return;

}



const user = {

name:name.value,

phone:phone.value,

date:new Date().toLocaleDateString()

};



localStorage.setItem(
"illuminatiUser",
JSON.stringify(user)
);



const result =
document.getElementById("result");


if(result){

result.innerText =
"ثبت شد: " + user.name;

}


// بروزرسانی پروفایل

loadUser();

}



// ---------- نمایش کاربر ----------

function loadUser(){

const data =
localStorage.getItem("illuminatiUser");


if(!data){

return;

}


const user =
JSON.parse(data);



const profileName =
document.querySelector("#profile h3");


if(profileName){

profileName.innerText =
user.name;

}


const profileText =
document.querySelector("#profile .glass-card p");


if(profileText){

profileText.innerText =
"شماره موبایل: " + user.phone;

}

}
