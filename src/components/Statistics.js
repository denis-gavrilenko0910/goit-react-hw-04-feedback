import { Fragment } from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ optionsAllStateData, total, positivPercent }) => {
  return (
    <Fragment>
      <ul className="statistics__list">
        {optionsAllStateData.map(([item, value]) => (
          <li key={item} className="statistics__items">
            <span className="item">{item}</span>
            <span className="item__value">{value}</span>
          </li>
        ))}
      </ul>
      <div className="total__container">
        <ul className="results_menu">
          <li>
            <span className="item__total">Total: {total}</span>
          </li>
          <li>
            <span className="item__positivFeedbacks item__positivPercnet">
              Positiv feedbacks: {positivPercent}%
            </span>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};
Statistics.propTypes = {
  optionsAllStateData: PropTypes.array,
};
