function step1(year) {
    if (year%4 == 0) {
        step2 (year);
    } 
    else {
        step5 (year);
    }
}

function step2(year) {
    if (year%100 == 0) {
        step3 (year);
    } 
    else {
        step4 (year);
    }
}

function step3(year) {
    if (year%400 == 0) {
        step4 (year);
    } 
    else {
        step5 (year);
    }
}

function step4(year) {
    console.log ("Год является високосным (366 дней)");
}

function step5(year) {
    console.log ("Год не високосный (365 дней)");
}

step1(2000);