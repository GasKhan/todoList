import { useState } from 'react';

export default function Todo(props) {
  const [correctText, setCorrectText] = useState(props.item.text);
  const [isCorrecting, setIsCorrecting] = useState(false);
  let isChecked = props.item.isChecked;

  function changeText() {
    props.changeHandler(props.item.id, correctText);
    setCorrectText('');
    toggleCorrectingWindow();
  }

  function toggleCorrectingWindow() {
    setCorrectText(props.item.text);
    setIsCorrecting((prevValue) => !prevValue);
  }

  return (
    <div className="todo">
      <input
        type="checkbox"
        className="todo__isChecked"
        checked={props.item.isChecked}
        name="isChecked"
        onChange={() => props.checkHandler(props.item.id)}
      ></input>
      <div className={`todo__text ${isChecked ? 'todo__text_checked' : ''}`}>
        {props.item.text}
      </div>
      <button
        className="todo__change todo__btn icon-pencil"
        onClick={toggleCorrectingWindow}
      ></button>
      <button
        className="todo__delete todo__btn icon-cross"
        onClick={() => props.deleteHandler(props.item.id)}
      ></button>

      {isCorrecting && (
        <div className="todo__correcting">
          <div className="todo__correcting-container">
            <textarea
              className="todo__correcting-textarea"
              value={correctText}
              onChange={(e) => setCorrectText(e.target.value)}
            ></textarea>
            <div className="correcting__buttons">
              <button
                className="todo__close-btn correcting__btn"
                onClick={toggleCorrectingWindow}
              >
                close
              </button>
              <button
                className="todo__change-btn correcting__btn"
                onClick={changeText}
              >
                change
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
