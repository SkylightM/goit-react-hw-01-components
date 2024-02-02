import css from './statisticsStyle.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => (
  <section className={css.statistics}>
    <h2 className={css.title}>Upload stats</h2>

    <ul className={css.statList}>
      {stats.map(stat => (
        <li className={css.item} key={stat.id}>
          <span className={css.label}>{stat.label} </span>
          <span className={css.percentage}>{stat.percentage}</span>
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