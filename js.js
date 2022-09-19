localStorage.setItem("rate", "");
onload = function () {
  if (localStorage.getItem("rate") == "") {
    document.getElementById("input4").value = 27;
  } else {
    document.getElementById("input4").value = localStorage.getItem("rate");
  }
};
let lab2 = document.querySelector(".h52").innerText;
let lab3 = document.querySelector(".h53").innerText;
let lab10 = document.querySelector(".h510").innerText;
// let btnShare = document.querySelector('.btn-share');
function inputs() {
  var num1 = document.getElementById("input1").value; //سعر المنتج كاش
  var num2 = document.getElementById("input2").value; //المقدم
  var num3 = document.getElementById("input3").value; //عدد الشهور
  var num4 = document.getElementById("input4").value; //النسبة
  var num5 = document.getElementById("input5"); //الباقي بعد المقدم
  var num6 = document.getElementById("input6"); //نسبة اجمالي الشهور
  var num7 = document.getElementById("input7"); //نسبة الربح بالجنية
  var num8 = document.getElementById("input8"); // سعر المنتج قسط 0.0
  var num9 = document.getElementById("input9"); //المبلغ المقسط
  var num10 = document.getElementById("input10"); //القسط الشهري
  var num11 = document.getElementById("input11"); //سعر المنتج قسط

  // سعر المنتج كاش 1 - المقدم 2 = الباقي يغد المقدم 5
  var sub = Number(num1) - Number(num2);
  num5.value = sub; // الباقي بعد المقدم

  //6 النسبه / 12 = نسبة اجمالي الشهور
  var mult = (Number(num4) / 100 / 12) * Number(num3);
  num6.value = mult; //نسبة اجمالي الشهور

  // الباقي بعد المقدم5 * نسبة اجمالي الشهور6 = 7نسبة الربح بالجنية
  var mult2 = Number(num5.value) * Number(num6.value);
  num7.value = mult2; //  7نسبة الربح بالجنية

  // 8نسبة الربح بالجنية 7 + سعر المنتج كاش1  = سعر المنتج قسط قبل التقريب
  var sum = Number(num7.value) + Number(num1);
  num8.value = sum; //8 سعر المنتج قسط قبل التقريب

  //  5نسبة الربح بالجنية 7 + الباقي بعد المقدم
  var sum2 = Number(num7.value) + Number(num5.value);
  num9.value = sum2; // 9 االمبلغ المقسط

  // المبلغ المقسط 9 / عدد الشهور3 = القسط الشهري 10
  var div = Number(num9.value) / Number(num3);
  num10.value = Math.floor(div); //  10 القسط الشهري
  // القسط الشهري 10 * عدد الشهور 3 + المقدم 2 = سعر المنتج
  var total = Number(num10.value) * Number(num3) + Number(num2);
  num11.value = total; // سعر المنتج قسط

  //localStorage setItem rate =====================
  localStorage.setItem("rate", num4);

  // share ================================================
  let myp = `
    <p>${lab2} = ${num2}</p>
    <p>${lab3} = ${num3}</p>
    <p>${lab10} = <span id="sumTkrep" class="tkrep">${num10.value}</span></p>`;

  document.querySelector(".myp").innerHTML = myp;

  let shared = document.querySelector(".myp").innerText;
  shareData = {
    text: shared,
  };
}
let btnTkrep = document.querySelector(".btn-tkrep");
btnTkrep.onclick = function () {

  let sumTkrep = document.getElementById("sumTkrep");

  let Ptkrep = document.querySelector(".tkrep").innerHTML;
  var last = +Ptkrep[Ptkrep.length - 1]; // هنا هاخد اندكس اخر رقم عن طريق اللينث بتاع فاليو الانبوت
  // console.log(last);
  var nuew = +Ptkrep; // عملت ديكلير لمتغير جديد بنفس قيمة فاليو الانبوت عشان عايز اعدل عليه بدون ما اعدل علي الاصل
  // console.log(nuew);
  if (last <= 5) {
    // لو اخر رقم اصغر من رقم 5
    var reselt = 5 - last; //اطرحه من رقم خمسة
    Number((nuew += reselt)); // الناتج اجمعه علي المتغير الجديد اللي كان بيساوي فاليو الانبوت
    sumTkrep.innerHTML = nuew; //اطبع بي الناتج
    // console.log(nuew);
  } else if (last > 5 && last <= 9) {
    //لو كا اكبر من خمسه وفي نفس الوقت اصغر من تسعه
    var reselt = 10 - last; // اطرحة من 10
    
    Number((nuew += reselt)); // خد ناتج الطرح زوده علي الفاليو بتاعة الانبوت
        
    sumTkrep.innerHTML = nuew; //اطبع الفاليو الجديدة
  }
};

let btnShare = document.querySelector(".btn-share");
btnShare.addEventListener("click", async () => {
  await navigator.share(shareData);
});

let gear = document.querySelector(".gear");
let settings = document.querySelector(".settings");
gear.addEventListener("click", function () {
  settings.classList.toggle("open");
});
// hts is  my footer
let myFooter = document.createElement("footer");
document.body.appendChild(myFooter);
myFooter.innerText = "By Hesham Mohamed © 2022";
myFooter.style.cssText =
  "background-color: #224eab;  position: fixed; bottom:0px; width: 100%; height:50px; margin:0px; padding:0px; text-align:center; color:white;display: flex;align-items:center;justify-content: center";
