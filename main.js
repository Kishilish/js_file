const todos = ["掃除","買い物", "散歩"];

const commands = ["確認","追加","削除","終了"];

let input;

while(input !== commands[3]){
  input = prompt(`${commands}のいずれかをインプットしてください`);
  if(input === commands[0]) {
    showtodos();
  } else if (input === commands[1]) {
    createTodo();
  } else if (input === commands[2]) {
    deleteTodo();
  } else if(input === commands[3]) {
    alert("終了します");
  } else {
    alert("「確認,追加,削除,終了」以外は入力できません");
  }
}
showtodos();


function showtodos () {
  console.log("========================");
  console.log("現在持っているのタスク一覧");
  console.log("========================");
  
  if(todos.length > 0) {
    todos.forEach((todo, index) => {
    console.log(`${index} : ${todo}`)  
    });
  } else {
    console.log("タスクなし");
  }
}

function createTodo () {
  const todo;
  todo = prompt("タスクを入力してください");

  if ( todo === "") {
    alert("何も入力されていないためスキップします");
  } else {
    todos.push(todo);
    alert("新しいタスクを追加しました。");
    showtodos();
  }
  // if(todo){}で記載すればブランクはfalseになる!

}

function deleteTodo() {
  const deleteNumber = prompt("削除するタスクの番号を指定してください");
  const parseNumber = parseInt(deleteNumber, 10);
  // promptは文字列stringで受け取るためnumber型に変換する
  if(isNaN(parseNumber) || parseNumber >= todos.length || parseNumber < 0) {
    alert("不正な値のためスキップします");
  } else {
    const deleteTodo = todos.splice(parseNumber,1);
    alert(`${parseNumber}を削除しました`);
    showtodos();
  }
}