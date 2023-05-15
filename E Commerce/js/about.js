let cartNumber = document.getElementById("items-number");
let CartCount = sessionStorage.getItem("counter") ?? 0;
cartNumber.innerHTML = CartCount;
