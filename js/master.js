let bar = document.querySelector("#bar");
let nav = document.querySelector("#navbar");
let closee = document.querySelector("#close");

bar.addEventListener("click", () => {

    nav.classList.add("active");

  });

  closee.addEventListener("click", () => {

    nav.classList.remove("active");

  });


