const add1 = document.querySelector(".add1")
const add2 = document.querySelector(".add2")
const add3 = document.querySelector(".add3")
const add4 = document.querySelector(".add4")
const add5 = document.querySelector(".add5")
const add6 = document.querySelector(".add6")
const add7 = document.querySelector(".add7")

const sub1 = document.querySelector(".sub1")
const sub2 = document.querySelector(".sub2")
const sub3 = document.querySelector(".sub3")
const sub4 = document.querySelector(".sub4")
const sub5 = document.querySelector(".sub5")
const sub6 = document.querySelector(".sub6")
const sub7 = document.querySelector(".sub7")

export const cost1 = 4.50;
export const cost2 = 4.00;
export const cost3 = 5.00;
export const cost4 = 120.0;
export const cost5 = 185.0;
export const cost6 = 75;
export const cost7 = 65;

const label1 = document.querySelector(".cnt1")
const label2 = document.querySelector(".cnt2")
const label3 = document.querySelector(".cnt3")
const label4 = document.querySelector(".cnt4")
const label5 = document.querySelector(".cnt5")
const label6 = document.querySelector(".cnt6")
const label7 = document.querySelector(".cnt7")


add1.addEventListener("click", ()=>{
    label1.innerHTML++;
    setVals() 
})

sub1.addEventListener("click", ()=>{
    if(label1.innerHTML > 0){
         label1.innerHTML--;
         setVals() 
    }
})

add2.addEventListener("click", ()=>{
    label2.innerHTML++;
    setVals() 
})

sub2.addEventListener("click", ()=>{
    if(label2.innerHTML > 0){
         label2.innerHTML--; 
         setVals()
    }
})

add3.addEventListener("click", ()=>{
    label3.innerHTML++;
    setVals() 
})

sub3.addEventListener("click", ()=>{
    if(label3.innerHTML > 0){
         label3.innerHTML--;
         setVals() 
    }
})

add4.addEventListener("click", ()=>{
    label4.innerHTML++;
    setVals() 
})

sub4.addEventListener("click", ()=>{
    if(label4.innerHTML > 0){
         label4.innerHTML--; 
         setVals()
    }
})

add5.addEventListener("click", ()=>{
    label5.innerHTML++;
    setVals() 
})

sub5.addEventListener("click", ()=>{
    if(label5.innerHTML > 0){
         label5.innerHTML--;
         setVals() 
    }
})

add6.addEventListener("click", ()=>{
    label6.innerHTML++; 
    setVals()
})

sub6.addEventListener("click", ()=>{
    if(label6.innerHTML > 0){
         label6.innerHTML--; 
         setVals()
    }
})

add7.addEventListener("click", ()=>{
    label7.innerHTML++; 
    setVals()
})

sub7.addEventListener("click", ()=>{
    if(label7.innerHTML > 0){
         label7.innerHTML--; 
         setVals()
    }
})

function setVals(){
    localStorage.setItem("tot1", label1.innerHTML)
    localStorage.setItem("tot2", label2.innerHTML)
    localStorage.setItem("tot3", label3.innerHTML)
    localStorage.setItem("tot4", label4.innerHTML)
    localStorage.setItem("tot5", label5.innerHTML)
    localStorage.setItem("tot6", label6.innerHTML)
    localStorage.setItem("tot7", label7.innerHTML)
}
