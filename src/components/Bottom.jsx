import React from 'react';

export default function Bottom(props) {
  return (
    <div className="bottom">
      <div className="bottom__done">
        <div className="bottom__done-amount" style={{ width: 20 }}></div>
        <span>is done</span>
      </div>
      <button
        className="bottom__remove icon-cross"
        onClick={props.removeHandler}
      >
        Remove checked
      </button>
    </div>
  );
}
