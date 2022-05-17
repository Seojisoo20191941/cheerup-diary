
function printName()  {
    let date = document.querySelector('#date').value;
    let myname = document.querySelector('#name').value;

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


    //null
    if (date===""){
        alert("날짜를 선택해주세요!");
        location.reload();
    }
    if (myname===""){
        alert("이름을 작성주세요!");    
        location.reload();

    }
    if (girlCheck===false && boyCheck===false){
        alert("성별을 선택해주세요!");
        location.reload();

    }
    if (girlCheck===true && boyCheck===true){
        alert("성별을 하나만 선택해주세요!");
        location.reload();

    }
    let check=0;
    if (sunnyCheck===true){
        check++;
    }
    if (cloudyCheck===true){
        check++;
    }
    if (rainCheck===true){
        check++;
    }
    if (snowCheck===true){
        check++;
    }

    if (check===0){
        alert("날씨를 선택해주세요!");
        location.reload();

    }
    else if (check>1){
        alert("날씨를 하나만 선택해주세요!");
        location.reload();

    }


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

$(function(){
    $("#shot").on("click", function(){
        console.log("ok");
        // 캡쳐 라이브러리를 통해서 canvas 오브젝트를 받고 이미지 파일로 리턴한다.
            html2canvas(document.querySelector("#capture")).then(canvas => {
            saveAs(canvas.toDataURL('image/png'),"capture-test.png");
        });
    });
    function saveAs(uri, filename) {
    // 캡쳐된 파일을 이미지 파일로 내보낸다.
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
    }
});


// //이미지(png)로 다운로드
// function PrintDiv(div){
// 	div = div[0]
// 	html2canvas(div).then(function(canvas){
// 		var myImage = canvas.toDataURL();
// 		downloadURI(myImage, "저장이미지이름.png") 
// 	});
// }

// function downloadURI(uri, name){
// 	var link = document.createElement("a")
// 	link.download = name;
// 	link.href = uri;
// 	document.body.appendChild(link);
// 	link.click();
// }