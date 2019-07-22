'use strict';
//1 задание
function fib(n){
    let a = 1,
    b = 1;
    for (let i = 3; i<= n; i++){
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log(fib(6));

// 2задание

function itr(m){
    let num;
    
    for (let i = 0; m > 50; i += 1){
        num = i + 1;
        m = m / 2;
    }

    return num;
}

console.log(itr(4500));
