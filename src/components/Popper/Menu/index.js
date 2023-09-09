import classNames from 'classnames/bind';
import { useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import styles from './Menu.module.scss';
import Header from './Header';
const cx = classNames.bind(styles);
const defaultfn = () => {};
function Menu({ children, items = [], onChange }) {
  const [history, setHistory] = useState([{ data: items }]); // để data làm key sẽ giống form children của items
  const current = history[history.length - 1]; // Phần tử cuối mảng
  const renderItems = () => {
    return current.data.map((item, index) => {
      // Lấy ra giá trị data trong obj
      const isParent = !!item.children; // Convert thành boolen
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      visible
      interactive
      offset={[20, 10]} // Điều chỉnh lại vị trí của tooltip
      delay={[0, 700]} // Giá trị đầu là thời gian hiện lên sau khi di chuột vào, giá trị sau là thời gian ẩn đi sau khi di chuột ra
      placement="bottom-end" // Điều chỉnh vị trí của tooltip
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && (
              <Header title="Language" onBack={() => setHistory((prev) => prev.slice(0, prev.length - 1))} />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
