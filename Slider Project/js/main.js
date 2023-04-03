//Get All Slider Elements and store them in array

let sliderElement = Array.from(
  document.querySelectorAll(".slide-container img")
);

//get slider items length
let sliderLength = sliderElement.length;
//Initialize curren slide to begin with it
let currentSlideElement = 1;

//Get next , previuos and indecator buttons and
let prevbtn = document.getElementById("prev");
let nextbtn = document.getElementById("next");
let indecator = document.getElementById("indecator");

//add pagination ul  and add id to it
let paginationElements = document.createElement("ul");
paginationElements.setAttribute("id", "pagination-ul");

//create items of pagination based on slide counts
for (let i = 0; i < sliderLength; i++) {
  //create li
  let paginationItem = document.createElement("li");
  //make custom attribute
  paginationItem.setAttribute("data-index", i + 1);
  //add contetn to pagination item
  paginationItem.appendChild(document.createTextNode(`${i + 1}`));
  //add pagination item to pagination Element
  paginationElements.appendChild(paginationItem);
}
//add pagination element to indecator span at body
indecator.appendChild(paginationElements);

//add onclick event at btns to get next and previos element
prevbtn.onclick = GetPreviuos;
nextbtn.onclick = GetNext;

//Get paggination ul whitch i created before
let paginationUl = document.getElementById("pagination-ul");

let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = () => {
    currentSlideElement = parseInt(
      paginationBullets[i].getAttribute("data-index")
    );
    AddActiveAndChecking();
  };
}

//function to add active class to elements and checking

function AddActiveAndChecking() {
  //get the slide-number elemetn
  let slideNumber = document.getElementById("slide-number");

  //change the inner text of the elemetn to update auto
  slideNumber.innerText = `Slide #${currentSlideElement} of ${sliderLength}`;

  //remove all active classes from images and pagination bullets
  RemoveAllActiveClasses();

  //add active class at current default image
  sliderElement[currentSlideElement - 1].classList.add("active");

  //add active class at pollet at pagination
  paginationUl.children[currentSlideElement - 1].classList.add("active");

  //check if the current slide element is the first
  if (currentSlideElement === 1) prevbtn.classList.add("disapled");
  else prevbtn.classList.remove("disapled");

  //check if the current slide element is the Last
  if (currentSlideElement === sliderLength) nextbtn.classList.add("disapled");
  else nextbtn.classList.remove("disapled");
}

AddActiveAndChecking();

//on next btn clicked
function GetNext() {
  if (currentSlideElement === sliderLength) return false;
  else {
    currentSlideElement++;
    AddActiveAndChecking();
  }
}

//on Previuos btn clicked
function GetPreviuos() {
  if (currentSlideElement === 1) return false;
  else {
    currentSlideElement--;
    AddActiveAndChecking();
  }
}

//remove all active classes from images and pagination bullets
function RemoveAllActiveClasses() {
  //Loop through img
  sliderElement.forEach((img) => {
    img.classList.remove("active");
  });

  //loop through pagination elements
  paginationBullets.forEach((li) => {
    li.classList.remove("active");
  });
}
