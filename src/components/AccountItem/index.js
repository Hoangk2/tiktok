import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function AccountItem({ data }) {
  const { avatar, full_name, nickname, tick } = data;
  return (
    <Link to={`/@${nickname}`} className={cx('wrapper')}>
      <Image className={cx('avatar')} src={avatar} alt={full_name}></Image>
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>{full_name}</span>
          {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </h4>
        <span className={cx('username')}>{nickname}</span>
      </div>
    </Link>
  );
}

AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
};
export default AccountItem;
