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
      interactive
      delay={[0, 700]}
      placement="bottom-end"
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
    >
      {children}
    </Tippy>
  );
}

export default Menu;
