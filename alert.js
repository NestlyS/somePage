function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var arrayTest = new Array();
for(var iter = 0; iter < 10; iter++) {
    arrayTest[iter] = getRandomInt(0,1000);
}
var testText = "\nМассив состоит из - " + arrayTest.join(", "); 
var someText = 'asasaas';
var testText2 = "\nСортированный массив состоит из - " + (arrayTest.sort()).join(", ");
alert(testText + testText2 );

function buttonClick (someVarName) {
    alert('Вы нажали на ' + someVarName.name + " кнопку!");
    document.write("Ну чтош, молодец. Давай по новой");
}

var color, counter = 0;
function count(object) {
    counter++;
    color = counter%10;
    object.innerHTML = "На этот текст наведен курсор "+ counter +" раз.";
    object.style.color = '#'+(color * 5+50)+(color * 5)+(counter);
}
//form.firstName.style.backgroundColor = '#000';

function valid(form){
    var ard_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i;
    var failed = false;
    var message = "";
    var name = form.firstName.value;
    var password = form.RePassword.value;
    var mail = form.email.value;
    var maleFe = form.state.value;
    if(name == "" || name == " "){
        failed = true;
        message += ' Вы не ввели свое имя!';
        form.firstName.style.backgroundColor = '#c11';
    }
    if (!ard_pattern.test(mail) || mail == ""){
        failed = true;
        form.email.style.backgroundColor = '#c11';
        message += "\n У вас ошибки в email!";
    }
    if(password == "" || password == " "){
        failed = true;
        message += '\n Вы не ввели свой пароль!';
        form.RePassword.style.backgroundColor = '#c11';
    } else if (password.charAt(0) != 'A'){
        failed = true;
        message += '\n Пароль должен начинаться с латинской А!';
        form.RePassword.style.backgroundColor = '#c11';
    }
    if(maleFe == ""){
        failed = true;
        message += '\n Выберите пол!';
        form.stateM.style.color = "#c11";
        form.stateF.style.color = "#c11";
    }
    if(failed){
        alert(message);
    } else {
        window.location = "index.html";
    }
    
}
var id;
var counter2 = -1;

function currentDate(){
    var curDate = new Date();
    document.getElementById('dateCur').innerHTML = "Текущая дата:" + curDate.getDay() + "."+ curDate.getMonth() + "." + curDate.getFullYear() + " | " + curDate.getHours() + " : " + curDate.getMinutes() + " : " + curDate.getSeconds();
    setTimeout("currentDate()", 1000);
   /* var newDate = new Date(2017, 8, 27, 15, 39, 55);
    document.getElementById('dateFalse').innerHTML = "Случайная дата:" + newDate.getDay() + "."+ newDate.getMonth() + "." + newDate.getFullYear() + " | " + newDate.getHours() + " : " + newDate.getMinutes() + " : " + newDate.getSeconds() + " "
    newDate.getTimezoneOffset;
    setTimeout("currentDate()", 1000);*/
}

function stringTest(){
    var string = 'Some string';
    var text = 'Длина строки - ' + string.length;
    text += string.
    alert(text);
}
function timer(){
    //id = setInterval("myFunction()", 1000);
    counter2++;
    document.getElementById("count").innerHTML = counter2 + " секунд.";
    setTimeout("timer()", 1000);
    setTimeout("currentDate()", 1000);
}





function myFunction(){
    counter2++;
    document.write("<br>Секунд прошло: " + counter2);
    if (counter2 == 3) clearInterval(id);
}