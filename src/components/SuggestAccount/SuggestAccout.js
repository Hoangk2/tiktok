import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import SuggestAccountItem from './SuggestAccountItem';

const cx = classNames.bind(styles);
function SuggestAccount({ label }) {
  return (
    <div className={cx('wrapper')}>
      <p className={cx('label')}>{label}</p>
      <SuggestAccountItem />
      <SuggestAccountItem />
      <SuggestAccountItem />
      <p className={cx('more-btn')}>See all</p>
    </div>
  );
}

SuggestAccount.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SuggestAccount;
