// Dynamic List Manager
const textInput = document.getElementById("textInput");
const button = document.getElementById("button");
const unOrderedList = document.getElementById("list");
const editButtons = document.getElementsByClassName("edit");

button.addEventListener("click", function () {
  let addedText = textInput.value;

  if (addedText == "") {
    return;
  }
  const listItem = document.createElement("li");
  listItem.innerHTML = `<span>${addedText}</span>
    <div class="btn-group">
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    </div>
  `;
  unOrderedList.append(listItem);

  const editBtn = listItem.querySelector(".edit-btn");
  const deleteBtn = listItem.querySelector(".delete-btn");

  editBtn.addEventListener("click", function () {
    let newText = prompt(
      "Edit item:",
      listItem.querySelector("span").textContent
    );
    if (newText !== null && newText !== "") {
      listItem.querySelector("span").textContent = newText;
    }
  });

  deleteBtn.addEventListener("click", function () {
    unOrderedList.removeChild(listItem);
  });
});

//  Filter Table Rows
const searchBar = document.getElementById("searchbar");
const rows = document.querySelectorAll("tbody tr");

searchBar.addEventListener("keyup", function () {
  const input = searchBar.value.toLowerCase();

  rows.forEach((row) => {
    const rowText = row.textContent.toLowerCase();

    if (rowText.includes(input)) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
});

// Image Carousel

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const images = document.querySelectorAll(".carousel-images img");

let currentIndex = 0;

function showImage(index) {
  
  images.forEach(image => image.style.display = "none");

 
  images[index].style.display = "block";
}


prevButton.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener("click", function()
  {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});


showImage(currentIndex);

// Theme Switcher

const themeToggleButton = document.getElementById("theme-toggle");

const body= document.querySelector("body");

//check for saved theme in local storage
const savedTheme = localStorage.getItem("theme");


if (savedTheme) {
  body.classList.add(savedTheme);
} else {
  body.classList.add("light");
}


themeToggleButton.addEventListener("click",function(){
  
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    localStorage.setItem("theme", "dark");

  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});

