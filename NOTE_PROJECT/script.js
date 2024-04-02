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

  newLi.addEventListener("click", function () {
    newLi.remove();
  });
});

// console.log(hapus);
