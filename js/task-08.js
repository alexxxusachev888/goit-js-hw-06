const ref = {
  formElem: document.querySelector('.login-form'),
  emailElem: document.querySelector('input[name="email"]'),
  passwordElem: document.querySelector('input[name="password"]'),
}

const inputsValues = ref.formElem.addEventListener('submit', (event) => {
  event.preventDefault();

  if (ref.emailElem.value === '' || ref.passwordElem.value === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  ref.formElem.reset();

  console.log(formData);

  return formData;
});