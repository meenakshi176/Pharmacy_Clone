function gotoOrder(){
    window.location.href="prodductpage.html";
}
function gotocart(){
    window.location.href="cart.html";
}
function gotoSignup(){
    window.location.href="signup.html"
}
cartarray=JSON.parse(localStorage.getItem("productBag"))
if(cartarray.length == 0)
{
    let nameEmpty = document.createElement("h1");
    nameEmpty.innerText = "Your cart is Empty";

    let imageEmpty = document.createElement("img");
    imageEmpty.setAttribute("src","https://assets.pharmeasy.in/web-assets/dist/bb14593e.svg");

    document.querySelector(".div2").append(nameEmpty,imageEmpty);
}
else{
    cartarray.forEach(function(el,index){
    box=document.createElement("div")

    image=document.createElement("img")
    image.src = el.image;
    
    h3=document.createElement("h3")
    h3.innerText=el.name

    p=document.createElement("p")
    p.innerText=el.branchName;

    h4=document.createElement("h4")
    h4.innerText="RS."+el.price
    button=document.createElement("button")
    button.innerText="remove from cart"


    button.addEventListener("click",function(){
        deleteFunction(el,index)
    })

    box.append(image,h3,p,h4,button)

    document.querySelector("#row").append(box)
})
}
function deleteFunction(el,index){
    cartarray.splice(index,1)
    localStorage.setItem("productBag",JSON.stringify(cartarray))
    location.reload();
}
// sum of aomount----------------------------------------------------------------
var sum=0;
cartarray.forEach(function(el){
   sum+=el.price
})
console.log(sum)
localStorage.setItem("amount",sum)
sum1=localStorage.getItem("amount")

button12=document.createElement("button")
button12.innerText="Amount"+"="+"RS."+sum1;
document.querySelector("#amount").append(button12)

button14=document.createElement("button")
button14.innerText="Use code : GRAND30 and get discount"
document.querySelector("#cuppon").append(button14)
button14.addEventListener("click",function(){
 discount(sum)
})
document.querySelector("#bag").innerText=cartarray.length;

l=cartarray.length;
localStorage.setItem("number",l)

function discount(sum){
 amnt=sum*30
 final=amnt/100
 sum=sum-final
 console.log(sum)
 localStorage.setItem("amount",sum)
 button12.innerText="Amount"+"="+"RS."+sum;
}