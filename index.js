const array = [];

const render = (array) => {
  const list = document.querySelector("#list");
  list.textContent = "";

  array.forEach((item, index) => {
    const listInfo = document.createElement("div");
    listInfo.classList.add("list_info");

    const label = document.createElement("label");

    const checkmark = document.createElement("div");
    if (themeSwitch.checked) {
      checkmark.className = "checkmark";
    } else {
      checkmark.className = "checkmark_switch";
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        item.done = true;
        textInfo.style.textDecoration = "line-through";
        listInfo.style.opacity = "0.3";
      } else {
        item.done = false;
        textInfo.style.textDecoration = "none";
        listInfo.style.opacity = "1";
      }
    });

    const textInfo = document.createElement("div");
    if (themeSwitch.checked) {
      textInfo.className = "text_info";
    } else {
      textInfo.className = "text_info_switch";
    }
    textInfo.textContent = item.text;

    const deleteButton = document.createElement("button");
    if (themeSwitch.checked) {
      deleteButton.className = "delete_button";
    } else {
      deleteButton.className = "delete_button_switch";
    }
    deleteButton.addEventListener("click", () => {
      removeList(index);
    });

    list.prepend(listInfo);
    listInfo.append(label, textInfo, deleteButton);
    label.append(checkbox, checkmark);

    if (item.done) {
      checkbox.checked = "checked";
      textInfo.style.textDecoration = "line-through";
      listInfo.style.opacity = "0.3";
    } else {
      checkbox.checked;
    }
    themeSwitch.addEventListener("click", () => {
      if (themeSwitch.checked) {
        checkmark.className = "checkmark";
        textInfo.className = "text_info";
        deleteButton.className = "delete_button";
      } else {
        checkmark.className = "checkmark_switch";
        textInfo.className = "text_info_switch";
        deleteButton.className = "delete_button_switch";
      }
    });
  });
};

const addList = (text) => {
  array.push({ text, done: false });
  render(array);
};

const removeList = (number) => {
  array.splice(number, 1);
  render(array);
};

const addWrap = document.querySelector(".add_wrap");
const addInput = document.querySelector(".add_input");
addWrap.addEventListener("submit", (e) => {
  e.preventDefault();
  if (addInput.value.startsWith(" ")) {
    addInput.value = "";
  } else {
    addList(addInput.value);
  }
  addInput.value = "";
});

const themeSwitch = document.querySelector("#checkbox");
themeSwitch.addEventListener("click", () => {
  document.body.classList.toggle("body");
  document.querySelector(".supreme").classList.toggle("supreme_switch");
  document.querySelector(".todo_text").classList.toggle("todo_text_switch");
  document.querySelector(".add_input").classList.toggle("add_input_switch");
  document.querySelector(".add_button").classList.toggle("add_button_switch");
});
