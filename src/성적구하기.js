let score;

score = Number(prompt("성적 입력"));

if(100>=score && score >=0) {
    if(score >= 90){
        score = "A";
    } else if(90 > score && score >=80){
        score = "B";
    } else if(80 > score && score >= 70) {
        score = "C";
    }  else if(70 > score && score >=60) {
        score="D";
    } else {
        score = "F";
    }   
}else {
    score = "오류";
}

document.write(score);