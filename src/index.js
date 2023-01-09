import "./styles.css";

const OnclickAdd = () => {
  //テキストインプットの内容を取得・初期化
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  //タスクの生成
  const div = document.createElement("div");
  div.className = "list-row";
  const li = document.createElement("li");
  li.innerText = inputText;

  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // document.getElementsByClassName("imcomplete-area")[0].appendChild(div);
  document.getElementById("ul-area").appendChild(div);
};

document.getElementById("add-button").addEventListener("click", () => {
  OnclickAdd();
});
