import "./styles.css";

const OnclickAdd = () => {
  //テキストインプットの内容を取得・初期化
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除する
const deleteFromIncompleteList = (target) => {
  document.getElementById("ul-area").removeChild(target);
};

//タスクの生成
const createIncompleteList = (text) => {
  const div = document.createElement("div");
  div.className = "list-row";

  const li = document.createElement("li");
  li.innerText = text;

  //完了ボタン生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    const div = document.createElement("div");
    div.className = "list-row";
    const li = document.createElement("li");
    li.innerText = text;

    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //戻すテキストを取得
      const addTarget = backButton.parentNode;
      const text = addTarget.firstElementChild.innerText;
      createIncompleteList(text);
      deleteFromcompleteList(backButton.parentNode);
    });

    div.appendChild(li);
    div.appendChild(backButton);
    document.getElementById("complete-ul-area").appendChild(div);

    deleteFromIncompleteList(completeButton.parentNode);
  });

  //削除ボタン生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  document.getElementById("ul-area").appendChild(div);
};

const deleteFromcompleteList = (target) => {
  document.getElementById("complete-ul-area").removeChild(target);
};

document.getElementById("add-button").addEventListener("click", () => {
  OnclickAdd();
});
