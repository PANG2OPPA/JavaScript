let sum1;
let sum2;
let sum3;

sum1 = Number(prompt("숫자1 입력"));
sum2 = Number(prompt("숫자2 입력"));
sum3 = Number(prompt("숫자3 입력"));

if(sum1 > sum2) {
    if(sum2 > sum3) min = sum3;
    else min = sum2;
} else {
    if(sum1 > sum3) min = sum3;
    else min = sum1;
}
if(sum1 > sum2) {
    if(sum1 > sum3) max = sum1;
    else max = sum3;
} else {
    if(sum2 > sumc) max = sum3;
    else max = sum3;
}

document.write("최댓값 : " + max);
document.write("최솟값 : " + min);

