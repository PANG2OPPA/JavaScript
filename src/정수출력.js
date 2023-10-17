let n = prompt("정수 입력 : ");
   n = Number(n);
   for(let i = 1; i <= n * n; i++) {
        document.write("<span class=nbyn>" + i + " " + "</span>");
        if(i % n == 0) document.write("<br>");
   }