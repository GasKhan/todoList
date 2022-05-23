export default function AddTodo(props) {
  return (
    <form className="add-todo" onSubmit={(e) => e.preventDefault()}>
      <input
        className="add-todo__input"
        value={props.text}
        onChange={(e) => props.inputHandler(e)}
      ></input>
      <button
        className="add-todo__btn icon-plus"
        onClick={() => props.btnHandler()}
      ></button>
    </form>
  );
}
