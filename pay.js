import {cost1, cost2, cost3, cost4, cost5, cost6, cost7} from "./script.js";

const tot = document.querySelector(".tot");
const item1 = document.querySelector(".item1");
const item2 = document.querySelector(".item2");
const item3 = document.querySelector(".item3");
const item4 = document.querySelector(".item4");
const item5 = document.querySelector(".item5");
const item6 = document.querySelector(".item6");
const item7 = document.querySelector(".item7");
const subTotal = document.querySelector(".subTotal");
const tax = document.querySelector(".tax");

function getTot1(){
    return localStorage.getItem("tot1");
}

function getTot2(){
    return localStorage.getItem("tot2");
}

function getTot3(){
    return localStorage.getItem("tot3");
}

function getTot4(){
    return localStorage.getItem("tot4");
}

function getTot5(){
    return localStorage.getItem("tot5");
}

function getTot6(){
    return localStorage.getItem("tot6");
}

function getTot7(){
    return localStorage.getItem("tot7");
}

item1.innerHTML = getTot1() + "-Pug - $" + (getTot1()* cost1)
item2.innerHTML = getTot2() + "-German Shepard - $" + (getTot2()* cost2)
item3.innerHTML = getTot3() + "-Husky - $" + (getTot3()* cost3)
item4.innerHTML = getTot4() + "-Dalmatian - $" + (getTot4()* cost3)
item5.innerHTML = getTot5() + "-Golden Doodle - $" + (getTot5()* cost3)
item6.innerHTML = getTot6() + "-Black Cat - $" + (getTot6()* cost3)
item7.innerHTML = getTot7() + "-Orange Tabby Cat - $" + (getTot7()* cost3)

const subTot = (getTot1()* cost1 + getTot2() * cost2 + getTot3() * cost3 + getTot4() * cost4 + getTot5() * cost5 + getTot6() * cost6 + getTot7() * cost7).toFixed(2)
subTotal.innerHTML = "Subtotal:" + subTot     

const taxNum = (0.0825 * parseFloat(subTot)).toFixed(2)
tax.innerHTML ="Tax:" + taxNum

const total = "Total:"+ (parseFloat(subTot) + parseFloat(taxNum)).toFixed(2)
tot.innerHtmL = total