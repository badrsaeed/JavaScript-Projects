// document.onscroll = function () {
//   let header = document.getElementsByTagName("header")[0];
//   if (scrollY > 100) {
//     header.style.boxShadow = "5px 5px 12px #EEE";
//   } else {
//     header.style.boxShadow = "none";
//   }
// };
//end box shadow

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};
