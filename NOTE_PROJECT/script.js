const taskForm = document.querySelector("#task");
const input = document.querySelector("input");
const tampung = document.querySelector("ul");
let lastId = 0;

taskForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const ambil_data = input.value;
  console.log(ambil_data);

  const newLi = document.createElement("li");
  newLi.innerHTML = ambil_data;
  tampung.appendChild(newLi);

  const newbut = document.createElement("button");
  newbut.id = "button_h";
  newbut.innerText = "Hapus";
  newLi.appendChild(newbut);

  newbut.addEventListener("click", function () {
    newLi.remove();
  });
});
