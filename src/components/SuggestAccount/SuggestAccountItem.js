import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import styles from './SuggestAccount.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountPreview from '~/components/SuggestAccount/AccountPreview';
const cx = classNames.bind(styles);
function SuggestAccountItem({ tick = true }) {
  return (
    <HeadlessTippy
      interactive
      delay={[800, 0]}
      offset={[-20, 0]}
      placement="bottom"
      render={(attrs) => (
        <div tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <AccountPreview />
          </PopperWrapper>
        </div>
      )}
    >
      <div className={cx('account-item')}>
        <img
          className={cx('avatar')}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ad8a8b6b783075a534f4baf36c6c8826.jpeg?x-expires=1696557600&x-signature=jD65z2Im5HDsR5aFpqDNUfizeI0%3D"
          alt=""
        />
        <div className={cx('item-infor')}>
          <p className={cx('nickname')}>
            <strong>daodienvingoclan</strong>
            {tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
          </p>
          <p className={cx('name')}>Đạo diễn Vi Ngọc Lan</p>
        </div>
      </div>
    </HeadlessTippy>
  );
}

SuggestAccountItem.propTypes = {};

export default SuggestAccountItem;
