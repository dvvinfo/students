function validateForm() {
  const form = document.querySelector(".form");
  const inputs = form.querySelectorAll(".form__input");
  const btn = form.querySelector(".form__btn");

  inputs.forEach(function (input) {
    input.addEventListener("input", checkFormValidity); // Проверка валидности при каждом вводе
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    btn.disabled = true; // Делаем кнопку неактивной при загрузке страницы
    // Проверка каждого инпута
    let formData = {};
    let isValidForm = true;

    inputs.forEach(function (input) {
      if (!input.value.trim()) {
        input.classList.add("error");
        isValidForm = false;
      } else {
        input.classList.remove("error");
        formData[input.name] = input.value;
        btn.disabled = false;
      }
    });

    if (isValidForm) {
      console.log(formData);
      // Отправка formData на сервер
      form.reset();
      btn.disabled = false; // Делаем кнопку неактивной после отправки формы
    }
  });

  function isValidEmail(email) {
    // Регулярное выражение для проверки формата email
    const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegExp.test(email);
  }

  function checkFormValidity() {
    let isFormValid = true;

    inputs.forEach(function (input) {
      if (
        !input.value.trim() ||
        (input.type === "email" && !isValidEmail(input.value))
      ) {
        isFormValid = false;
      }
    });

    btn.disabled = !isFormValid; // Активируем или деактивируем кнопку в зависимости от валидности формы
  }
}

export default validateForm;
