function openLoginNav() {
  const loginBtn = document.querySelector(".login__btn");
  const loginContent = document.querySelector(".login__content");

  loginBtn.addEventListener("click", () => {
    loginContent.classList.toggle("show");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".login") && !e.target.closest(".loginBtn")) {
      loginContent.classList.remove("show");
    }
  });
}

export default openLoginNav;
