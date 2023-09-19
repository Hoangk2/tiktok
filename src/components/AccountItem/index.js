import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <Image
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/751d9281c7f18830a694812b0643f720.jpeg?x-expires=1694221200&x-signature=EJrKapbAXPiZZWksW08EygJdVbU%3D"
        alt="Hoa.hasanii"
      ></Image>
      <div className={cx('infor')}>
        <h4 className={cx('name')}>
          <span>Đào Lê Phương Hoa</span>
          <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>Hoa.hanasii</span>
      </div>
    </div>
  );
}

export default AccountItem;
