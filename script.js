let myMoney =750
function totalHesap (hesap1,hesap2,hesap3,hesap4) {
    return hesap1+hesap2+hesap3+hesap4;
}
console.log(totalHesap (124,48,75,268));
function calculateTip (bill) {
    if(bill<=50) {
        return bill*0.2;
    }else if (bill>50 && bill<200) {
        return bill*0.15;
    }else if (bill>200) {
        return bill*0.1;
    }else {
        return "try again";
    }
}
console.log(Math.floor(calculateTip (124)))
function getTotalTips () {
    return calculateTip (124) +calculateTip (48)+calculateTip (75)+calculateTip (268);
}
console.log(Math.floor(getTotalTips()));
function totalBill () {
    return myMoney -(totalHesap(124,48,75,268)+getTotalTips());
}
console.log(totalBill());
if(totalBill()>myMoney*0.8) {
    console.log(`bütcenizi astınız `)
}else {
    console.log("harcamaya devam ")
}