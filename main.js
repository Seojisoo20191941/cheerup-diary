let girl=0;
let boy=0;
let sunny=0;
let cloudy=0;
let rain=0;
let snow=0;

function girlCheck(){
    girl=1;
}
function boyCheck(){
    boy=1;
}
function sunnyCheck(){
    sunny=1;
}
function cloudyCheck(){
    cloudy=1;
}
function rainCheck(){
    rain=1;
}
function snowCheck(){
    snow=1;
}
function sunnyOver(){
    document.getElementById('sunny').src="img/sunny-check.png";
}
function cloudyOver(){
    document.getElementById('cloudy').src="img/cloud-check.png";
}
function rainOver(){
    document.getElementById('rain').src="img/rain-check.png";
}
function snowOver(){
    document.getElementById('snow').src="img/snow-check.png";
}
function sunnyOut(){
    document.getElementById('sunny').src="img/sunny-uncheck.png";
}
function cloudyOut(){
    document.getElementById('cloudy').src="img/cloud-uncheck.png";
}
function rainOut(){
    document.getElementById('rain').src="img/rain-uncheck.png";
}
function snowOut(){
    document.getElementById('snow').src="img/snow-uncheck.png";
}

function printName()  {
    let date = document.getElementById('date').value;
    let name = document.getElementById('name').value;
    console.log(name);
    console.log(date);    
    document.querySelector(".startpage").style.display="none";
    document.querySelector(".resultpage").style.display="block";
}
