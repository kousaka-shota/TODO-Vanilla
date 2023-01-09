import "./styles.css";

const OnclickAdd = () => {
  const inputText = document.getElementById("input-text").value;
  alert(inputText);
  document.getElementById("input-text").value = "";
};

document.getElementById("add-button").addEventListener("click", () => {
  OnclickAdd();
});
