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
function printName()  {
    let date = document.getElementById('date').value;
    let name = document.getElementById('name').value;
    console.log(name);
    console.log(date);
    console.log(girl);

  }