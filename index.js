
/*----- Hamburger ----*/
var hamburger = document.querySelector(".hamburger");
var navmenu  = document.querySelector(".navmenu");

hamburger.addEventListener("click", ()=>{
  hamburger.classList.toggle("activeHam");
  navmenu.classList.toggle("active");
})
document.querySelectorAll(".navitem").forEach(n => n.addEventListener("click", ()=>{
  hamburger.classList.remove("activeHam");
  navmenu.classList.remove("active");
}))

/*----- Login & Signup ----*/
     var x = document.getElementById("register");
    var y = document.getElementById("login");
    var z = document.getElementById("btn");

    function register(){
      x.style.left = "60px";
      y.style.left = "-460px";
      z.style.left = "0px";
    }

    function login(){
      y.style.left = "60px";
      x.style.left = "-400px";
      z.style.left = "110px";
    }

    /*----- Swiper ----*/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      // autoplay :true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        100: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      },
    });

    var swiper2 = new Swiper(".mySwiper2", {
      slidesPerView: 3,
      spaceBetween: 30,
      autoplay :true,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        100: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
    });

    // var scroll = new SmoothhScroll('a[href*="#"]',{
    //   speed: 3000,
    //   speedAsDuration : true
    // });

// Products fetching 

let cardContainer = document.querySelector(".card-group");

// async function myProducts()
// {
// let response = await fetch('./products.json');
// let products1 =await response.json();
// // console.log(products1);
// let {products} = products1;// this is mandatory  destructuring for array of objects
// // console.log(products);
// let html = "";// this is manadate
//  products.forEach((element)=>
// {
//   html += `
//  <div class="card">
//  <img src="${element.images}" class="card-img-top" alt="...">
//  <div class="card-body">
//    <h5 class="card-title">${element.title}</h5>
//    <p>Price :<span> ₹${element.price}/-</span></p>
//    <button class="btn-cart" data-addProduct >Add Item</button>
//  </div>
// </div>  `;
//  cardContainer.innerHTML = html;// insert adjacent not working
// });
// }
// myProducts();



let html;
fetch('./products.json').then(function(response){
return response.json();
})
.then(function(data){
console.log(data);
let {products} = data;
products.forEach((element)=>{
console.log(element);
  html = `
 <div class="card">
 <img src="${element.images}" class="card-img-top" alt="...">
 <div class="card-body">
   <h5 class="card-title">${element.title}</h5>
   <p>Price :<span> ₹${element.price}/-</span></p>
   <button class="btn-cart" data-addProduct >Add Item</button>
 </div>
</div>  `;
cardContainer.insertAdjacentHTML('afterbegin',html);



   /*----- Cart Button ----*/
   let cartBtn = document.querySelectorAll(".btn-cart");
   let cartCount = document.querySelector(".cart-count");
   let count = 1;


     cartBtn.forEach(n => n.addEventListener("click",()=>
     {
       n.innerHTML = "added To Cart ";
       cartCount.innerHTML = count++;
       n.style.background = "green";
       setTimeout(()=>
       {
         cartCount.style.display = "block";
         n.innerHTML = "Add Item";
         n.style.background = "#ebeae7";
       },700);
       
     }));





})
} ).catch((error)=>{
  console.log('error!')
});







 












    
      
  /*----- Loader ----*/
// let loader = document.getElementById("loader");
// window.addEventListener("load",()=>
// {
//   loader.style.display = "none";
// })