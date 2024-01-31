import './statisticsStyle.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
      {stats.map(stat => (
        <li className="item" key={stat.id}>
          <span className="label">{stat.label} </span>
          <span className="percentage">{stat.percentage}</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;