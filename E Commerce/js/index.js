//Get slider Elemetn
let imgs = Array.from(document.querySelectorAll("#slider-imgs img"));
let prevBtn = document.getElementsByClassName("prev")[0];
let nextBtn = document.getElementsByClassName("next")[0];
let indecators = document.getElementsByClassName("indecator")[0];

//Slider Current Element
let currentElement = 1;

nextBtn.onclick = getNext;
prevBtn.onclick = getPrevious;

let electronics = document.getElementById("phones");
let jewelery = document.getElementById("labs");
let men = document.getElementById("cars");
let women = document.getElementById("makeup");

// async function getProducts() {
//   let req = new XMLHttpRequest();
//   req.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//       console.log(JSON.parse(req.responseText));
//       return req.responseText;
//     }
//   };

//   req.open("GET", "https://api.escuelajs.co/api/v1/products");
//   req.send();
// }

let minus;
let plus;
let btn;

loadProduct("electronics");
function loadProduct(category) {
  let producContainer = document.getElementById("products");
  producContainer.innerHTML = "";

  let req = new XMLHttpRequest();
  req.open("GET", "https://fakestoreapi.com/products", true);
  req.onreadystatechange = () => {
    if (req.readyState === 4 && req.status === 200) {
      var data = Array.from(JSON.parse(req.responseText));
      // console.log(data);

      let filterdData = data.filter((p) => {
        return p.category === category;
      });

      console.log(filterdData);
      filterdData.forEach((item) => {
        console.log(item.image);
        let productCard = document.createElement("div");
        productCard.classList.add("product-card");
        let productimg = document.createElement("div");
        productimg.classList.add("product-img");
        let img = document.createElement("img");
        img.setAttribute("src", item.image);
        img.setAttribute("height", "200px");
        productimg.appendChild(img);
        let productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        let titlePrice = document.createElement("div");
        titlePrice.classList.add("title-price");
        let title = document.createElement("div");
        titlePrice.classList.add("title");
        title.appendChild(document.createTextNode(item.title.slice(0, 15)));
        let price = document.createElement("div");
        price.classList.add("price");
        price.appendChild(document.createTextNode(item.price + " $"));
        titlePrice.append(title, price);
        productInfo.appendChild(titlePrice);
        let summary = document.createElement("div");
        summary.classList.add("summary");
        summary.appendChild(
          document.createTextNode(item.description.slice(0, 50))
        );
        let btns = document.createElement("div");
        btns.classList.add("btns");
        let more = document.createElement("a");
        more.classList.add("more");
        more.appendChild(
          document
            .createElement("span")
            .appendChild(document.createTextNode("more.."))
        );
        let quantityControl = document.createElement("div");
        quantityControl.classList.add("quentity-control");
        minus = document.createElement("span");
        minus.classList.add("minus");
        minus.appendChild(document.createTextNode("-"));
        let quantity = document.createElement("span");
        quantity.classList.add("minus");
        quantity.appendChild(document.createTextNode("1"));
        plus = document.createElement("span");
        plus.classList.add("minus");
        plus.appendChild(document.createTextNode("+"));
        quantityControl.append(minus, quantity, plus);
        btn = document.createElement("button");
        btn.classList.add("add");
        let icon = document.createElement("i");
        // icon.classList.add("fa-sharp fa-solid fa-plus");
        let addSpan = document.createElement("span");
        addSpan.appendChild(document.createTextNode("Add"));
        btns.append(more, quantityControl, btn);
        btn.append(icon, addSpan);
        btn.setAttribute("onclick", "IncrementCartCount()");
        productInfo.append(titlePrice, summary, btns);
        productCard.append(productimg, productInfo);
        producContainer.appendChild(productCard);
      });
    }
  };
  req.send();
}

let cartNumber = document.getElementById("items-number");
let CartCount = sessionStorage.getItem("counter") ?? 0;
cartNumber.innerHTML = CartCount;

console.log(CartCount);
function IncrementCartCount() {
  cartNumber.innerHTML = ++CartCount;
  window.sessionStorage.setItem("counter", CartCount);
}

function removeActiveClassForCategory() {
  let categories = document.querySelectorAll("#categories a");
  console.log(categories);
  categories.forEach((a) => {
    a.classList.remove("active");
  });
}

document.addEventListener("DOMContentLoaded", () => {
  electronics.addEventListener("click", (e) => {
    loadProduct("electronics");
    removeActiveClassForCategory();
    e.target.classList.add("active");
  });
  jewelery.addEventListener("click", (e) => {
    loadProduct("jewelery");
    removeActiveClassForCategory();
    e.target.classList.add("active");
  });
  men.addEventListener("click", (e) => {
    loadProduct("men's clothing");
    removeActiveClassForCategory();
    e.target.classList.add("active");
  });
  women.addEventListener("click", (e) => {
    loadProduct("women's clothing");
    removeActiveClassForCategory();
    e.target.classList.add("active");
  });
});

//click previous btn at slider
function getPrevious() {
  removeActiveClass();
  if (currentElement === 1) currentElement = imgs.length;
  currentElement--;
  checking();
}
//click next btn at slider

function getNext() {
  removeActiveClass();
  if (currentElement === imgs.length) currentElement = 0;
  currentElement++;
  checking();
}
//end next btn

//make slider run auto
window.onload = function () {
  setInterval(() => {
    getNext();
  }, 1500);
};
//end slider run

//show the shadow box on scrolling

//Create indecators at slider
var paginaation = document.createElement("ul");
paginaation.setAttribute("id", "pagination-ul");
for (let i = 0; i < imgs.length; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i + 1);
  paginaation.appendChild(paginationItem);
}
indecators.appendChild(paginaation);
var paginationUl = document.getElementById("pagination-ul");
let paginationSlider = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

//on click at slider indecators it will be navigate to next or previous
for (let i = 0; i < paginationSlider.length; i++) {
  paginationSlider[i].onclick = function () {
    currentElement = parseInt(paginationSlider[i].getAttribute("data-index"));
    checking();
  };
}

function checking() {
  removeActiveClass();
  imgs[currentElement - 1].classList.add("active");
  paginationSlider[currentElement - 1].classList.add("active");
}
checking();
//end indecator
//remove all active class from all images
function removeActiveClass() {
  imgs.forEach((img) => {
    img.classList.remove("active");
  });
  paginationSlider.forEach((li) => {
    li.classList.remove("active");
  });
}
//end remove

//Handle the number of items at cart and the add btns
