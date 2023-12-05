const form = document.querySelector(".login-form");

const handleSubmit = (event) => {
  event.preventDefault();
  const email = form.email.value.trim();
  const password = form.password.value.trim();

  if (email === "" || password === "") {
    return alert("All form fields must be filled in");
  }

  const formData = {
    userEmail: email,
    userPassword: password,
  };

  console.log(formData);
};

form.addEventListener("submit", handleSubmit);
