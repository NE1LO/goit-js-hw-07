const inputEl = document.querySelector("#name-input");
const nameValueEl = document.querySelector("#name-output");

const createUser = () => {
  inputEl.value.trim() === ""
    ? (nameValueEl.textContent = "Anonymous")
    : (nameValueEl.textContent = inputEl.value.trim());
};

inputEl.addEventListener("input", createUser);
