import { Fragment } from 'react';

export const FeedbackOptions = ({ buttons, onLeaveFeedback }) => {
  return (
    <Fragment>
      <ul className="button__list">
        {buttons.map(item => (
          <li key={item} className="button__items">
            <button
              className="button"
              type="button"
              onClick={() => {
                onLeaveFeedback(item);
              }}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};
