//dropdown menus to change the font size, color, and font family of a text block
const para = document.querySelector("p");
const FontSize = document.getElementById("fontsize");
const Color = document.getElementById("color");
const FontFamily = document.getElementById("font-family");

FontSize.addEventListener("change", function () {
  para.style.fontSize = FontSize.value;
});
Color.addEventListener("change", function () {
  para.style.color = Color.value;
});
FontFamily.addEventListener("change", function () {
  para.style.fontFamily = FontFamily.value;
});

//button that displays the number of times it has been clicked.
let count = 0;
const button = document.querySelector("button");
const counter = document.getElementById("counter");

button.addEventListener("click", function () {
  count++;
  counter.textContent = `Button has been clicked ${count} times`;
});

//Show/Hide Password Toggle
const Password = document.getElementById("password");
const checkbox = document.getElementById("checkbox");

checkbox.addEventListener('change',function(){
    
    Password.type = checkbox.checked ? 'text':'password';

});

//  Real-Time Character Counter
let words = 0;
      const textArea = document.getElementById("text-area");
      const charCount = document.getElementById("charCount");
      textArea.addEventListener('input',function(){
          const remaining = 200 - textArea.value.length;
          charCount.textContent = ` Real-Time Character Counter :${remaining}`;

      })
