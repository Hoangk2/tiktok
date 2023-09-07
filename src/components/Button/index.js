import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({
  to,
  text,
  href,
  large,
  small,
  primary,
  disabled,
  outline,
  rounded,
  children,
  className,
  icon,
  onClick,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    // Thêm sự kiện Click chuột
    onClick, // Cú pháp rút gọn ES6+
    ...passProps, // Cú pháp giải
  };

  // Xử lý xóa các sự kiện chuột khi có prop disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  // Xử lý để chuyển đổi tên thẻ
  if (to) {
    // để biến thành thẻ Link
    props.to = to; // cú pháp js để thêm gía trị cho obj
    Comp = 'Link';
  } else if (href) {
    // để biến thành thẻ a
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    small,
    large,
    text,
    disabled,
    rounded,
    [className]: className,
  });
  return (
    <Comp className={classes} {...props}>
      {icon && <span className={cx('icon')}>{icon}</span>}
      <span>{children}</span>
    </Comp>
  );
}

export default Button;
