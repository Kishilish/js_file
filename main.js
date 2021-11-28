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

/**
 * 「追加」が入力されたときに実行される関数「createTodo関数」を用意する
 *    - promptを使って追加するタスクを入力できるようにする
 *      - 入力ボックスに表示するメッセージは「'タスクを入力してください'」とする
 *    - promptに値が入力されないで「OK」ボタンがおされたらalertで「'何も入力されていないためスキップします'」と表示する
 *    - promptに値が入力された状態で「OK」ボタンがおされたら次の処理をする
 *      1. 入力された内容をtodos(配列)の末尾に追加する。
 *      2. 「'新しいタスクを追加しました。'」とalert表示する
 *      3. showTodos関数を実行して、現在保持しているタスク一覧を表示する
 */
// ここにcreateTodo関数を作る
function createTodo () {
  let todo;
  todo = prompt("タスクを入力してください");

  if ( todo === "") {
    alert("何も入力されていないためスキップします");
  } else {
    todos.push(todo);
    alert("新しいタスクを追加しました。");
    showtodos();
  }
}

/**
 * 「削除」が入力されたときに実行される関数
 *    - promptを使って削除するタスクのインデックス番号を入力できるようにする
 *      - 入力ボックスに表示するメッセージは「'削除するタスクの番号を指定してください'」とする
 *    - promptで入力された数字は `文字列` として扱われるため、数値に変換する
 *      - 数字('1')を数値(1)に変換するにはparseInt関数をつかう
 *        - parseInt: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/parseInt
 *    - promptに値が入力された値が不正な場合は「'不正な値のためスキップします'」とalert表示する
 *      - 不正な値とは、配列のインデックス番号以外の値を指す。(配列に5個値があれば、「0, 1, 2, 3, 4」だけが正しい値で、それ以外は不正な値になる)
 *      - parseIntした結果「NaN」という値が出たときの対応策として「isNaN」関数が使える
 *        - isNaN: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/isNaN
 *    - promptに値が入力された値が正しければ次の処理をする
 *      1. 配列の組み込みメソッド「splice」を使って、入力されたインデックス番号に対応した値を配列から削除する
 *        - splice: https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
 *        - 削除した値は変数deletedTodosという変数に代入する(上記ドキュメントを読むと分かる通り、削除した値が1つだけでも戻り値は配列となることに注意)
 *      2. 「'〇〇を削除しました'」とalert表示する
 *        - 「〇〇」には削除した「タスク名」が入る
 *          - 例: 「掃除」を削除した場合は、「'掃除を削除しました'」とalert表示する
 *      3. showTodos関数を実行して、現在保持しているタスク一覧を表示する
 */
// ここにdeleteTodo関数を作る
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