// let girl=0;
// let boy=0;
// let sunny=0;
// let cloudy=0;
// let rain=0;
// let snow=0;

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
    // let resultimage = document.querySelector("#resultimage").src;
    // let comment=document.querySelector("#comment").innerHTML;
    console.log(myname);
    console.log(date);    
    document.querySelector(".startpage").style.display="none";
    document.querySelector(".resultpage").style.display="block";
    document.querySelector("#resultdate").innerHTML=date;
    document.querySelector("#resultname").innerHTML=myname +"!";

    let girlCheck=document.querySelector("#girl").checked;
    let boyCheck=document.querySelector("#boy").checked;
    let sunnyCheck=document.querySelector("#sunny").checked;
    let cloudyCheck=document.querySelector("#cloudy").checked;
    let rainCheck=document.querySelector("#rain").checked;
    let snowCheck=document.querySelector("#snow").checked;

    console.log(girlCheck);

    // girl
    if (girlCheck){
        if (sunnyCheck){
            document.querySelector("#resultimage").src="img/sunny_girl.png";
            document.querySelector("#comment").innerHTML="화창한 날씨처럼 행복해!";
        }
        else if (cloudyCheck){
            document.querySelector("#resultimage").src="img/cloudy_girl.png";
            document.querySelector("#comment").innerHTML="바빠도 하늘은 보고 살자!";
        }
        else if (rainCheck){
            document.querySelector("#resultimage").src="img/rain_girl.png";
            document.querySelector("#comment").innerHTML="첨벙첨벙 자연asmr 들으며 푹 자!";
        }
        else if (snowCheck){
            document.querySelector("#resultimage").src="img/snow_girl.png";
            document.querySelector("#comment").innerHTML="함박눈이 내리는 날, 함박웃음을 지어보자!";
        }
    }

    if (boyCheck){
        if (sunnyCheck){
            document.querySelector("#resultimage").src="img/sunny_boy.png";
            document.querySelector("#comment").innerHTML="화창한 날씨처럼 행복해!";
        }
        else if (cloudyCheck){
            document.querySelector("#resultimage").src="img/cloudy_boy.png";
            document.querySelector("#comment").innerHTML="바빠도 하늘은 보고 살자!";
        }
        else if (rainCheck){
            document.querySelector("#resultimage").src="img/rain_boy.png";
            document.querySelector("#comment").innerHTML="첨벙첨벙 자연asmr 들으며 푹 자!";
        }
        else if (snowCheck){
            document.querySelector("#resultimage").src="img/snow_boy.png";
            document.querySelector("#comment").innerHTML="함박눈이 내리는 날, 함박웃음을 지어보자!";
        }
    }

}
function replay(){
    location.reload();
}
