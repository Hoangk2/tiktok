import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import classNames from 'classnames/bind';
import styles from '~/components/SuggestAccount/AccountPreview/AccountPreview.module.scss';
import Button from '~/components/Button';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

function AccountPreview({ tick = true }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <Image
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ad8a8b6b783075a534f4baf36c6c8826.jpeg?x-expires=1696557600&x-signature=jD65z2Im5HDsR5aFpqDNUfizeI0%3D"
          alt="Vi Ngọc Lan"
        />
        <div>
          <Button className={cx('btn')} primary>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx('body')}>
        <p className={cx('nickname')}>
          <strong>daodienvingoclan</strong>
          {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
        </p>
        <p className={cx('name')}>Đạo diễn Vi Ngọc Lan</p>
        <p className={cx('analytics')}>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
          <strong className={cx('value')}>8.2M </strong>
          <span className={cx('label')}>Followers</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
