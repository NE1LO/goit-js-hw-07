const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  let email = form.email.value.trim();
  let password = form.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    userEmail: email,
    userPassword: password,
  };

  console.log(formData);

  form.reset();
};

form.addEventListener("submit", handleSubmit);
