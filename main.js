let girl=0;
let boy=0;
let sunny=0;
let cloudy=0;
let rain=0;
let snow=0;

// console.log(document.querySelector("#girl"));
// let girlCheck=document.querySelector("#girl").checked;
// console.log(girlCheck);
// let genderCheck = document.getElementsByName("gender");
// console.log(genderCheck[0].checked);
// if (genderCheck[0].checked) {
//     console.log("checked");
// }
// else if (genderCheck[1].checked) {
//     boy = 1;
// }
// console.log(girl);
// let weatherCheck = document.getElementsByName("weather");
// if (weatherCheck[0].checked) {
//     document.querySelector('.sunny-img').style.content = url("img/sunny-check.png");
//     sunny++;
// }
// else if (weatherCheck[1].checked) {
//     document.querySelector('.cloudy-img').style.content = url("img/cloudy-check.png");
//     cloudy = 1;
// }
// else if (weatherCheck[2].checked) {
//     document.querySelector('.rain-img').style.content = url("img/rain-check.png");
//     rain = 1;
// }
// else if (weatherCheck[3].checked) {
//     document.querySelector('.snow-img').style.content = url("img/snow-check.png");
//     snow = 1;
// }
// console.log(rain);


function printName()  {
    let date = document.querySelector('#date').value;
    let myname = document.querySelector('#name').value;
    console.log(myname);
    console.log(date);    
    document.querySelector(".startpage").style.display="none";
    document.querySelector(".resultpage").style.display="block";
    document.querySelector("#resultdate").innerHTML=date;
    document.querySelector("#resultname").innerHTML=myname +"!";
    // girl
    if (girl>0){

    }
    // sunny
    // cloudy
    // rain
    // snow
    if (boy>0){

    }
    // boy
    // sunny
    // cloudy
    // rain
    // snow

}
function replay(){
    location.reload();
}
