const ref = {
  formElem: document.querySelector('.login-form'),
  emailElem: document.querySelector('input[name="email"]'),
  passwordElem: document.querySelector('input[name="password]'),
}

const inputsValues = ref.formElem.addEventListener('submit', (event) => {
  event.preventDefault();

  if (ref.emailElem.value === '') {
    alert('Всі поля повинні бути заповнені!');
  }

  const formData = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  ref.formElem.reset();

  console.log(formData);

  return formData;
});


/*  if (ref.emailElem.value === '' || ref.passwordElem.value === '') {
   alert('Всі поля повинні бути заповнені!');

   не вдається пройти перевірку на незаповнення поля password у вищенаведеній редакції, чомусь видає помилку -
   Uncaught TypeError: Cannot read properties of null(reading 'value').
   Хоча email зроблено ідентично і все гаразд. Допоможіть буд-ласка зрозуміти у чому моя проблема) 

 } */