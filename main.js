let girl=0;
let boy=0;
let sunny=0;
let cloudy=0;
let rain=0;
let snow=0;

function girlCheck(){
    document.getElementById('girl').style.width="16vh";
    girl=1;
}
function boyCheck(){
    boy=1;
    document.getElementById('boy').style.width="16vh";

}
function sunnyCheck(){
    sunny=1;
    document.getElementById('sunny').src="img/sunny-check.png";

}
function cloudyCheck(){
    cloudy=1;
    document.getElementById('cloudy').src="img/cloud-check.png";

}
function rainCheck(){
    rain=1;
    document.getElementById('rain').src="img/rain-uncheck.png";

}
function snowCheck(){
    snow=1;
    document.getElementById('snow').src="img/snow-uncheck.png";

}
function girlOver(){
    document.getElementById('girl').style.width="16vh";
}
function boyOver(){
    document.getElementById('boy').style.width="16vh";
}  
function girlOut(){
    document.getElementById('girl').style.width="14vh";
}
function boyOut(){
    document.getElementById('boy').style.width="14vh";
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
    let myname = document.getElementById('name').value;
    console.log(myname);
    console.log(date);    
    document.querySelector(".startpage").style.display="none";
    document.querySelector(".resultpage").style.display="block";
    document.querySelector("#resultdate").innerHTML=date;
    document.querySelector("#resultname").innerHTML=myname +"!";

    

}
function replay(){
    location.reload();
}
