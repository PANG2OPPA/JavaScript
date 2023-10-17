// let menu1 = [];
// let menu2 = [];
// menu1[0]=Number(prompt("햄1"));
// menu1[1]=Number(prompt("햄2"));
// menu1[2]=Number(prompt("햄3"));
// menu2[0]=Number(prompt("음1"));
// menu2[1]=Number(prompt("음2"));

// menu1.sort();
// menu2.sort();

// document.write("빈티지 : " + Number(menu1[0] + menu2[0]));
// document.write(" 프리미엄 : " + Number(menu1[2] + menu2[1]);

function getPrice() {
    let menu = [];
    for(let i =0; i < 5; i++) {
        menu[i] = Number(document.getElementById("menu" + (i+1)).value);
    }
    let minB = menu[0];
    let minD = menu[3];
    for (let i = 0; i < menu.length; i++) {
        if (i < 3 && minB > menu[i]) minB = menu[i];
        if (i > 2 && minD > menu[i]) minD = menu[i];
};
document.getElementById("value").innerHTML = (minD + minB - 50) + "원";
}