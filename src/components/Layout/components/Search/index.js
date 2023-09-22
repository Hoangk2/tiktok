import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import HeadlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';

import * as searchService from '~/apiServices/searchService';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true); // Ktra điều kiện focus
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 500);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    // Tách ra 1 hàm để tối ưu vs useCallBack sau
    setShowResult(false);
  };

  useEffect(() => {
    if (!searchValue.trim()) {
      // check điều kiện không gõ kết quả ban đầu mà useEffect vẫn thực hiện lúc mới vào vì trường q là bắt buộc
      setShowResult([]);
      return;
    }
    const fetchApi = async () => {
      setLoading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setLoading(false);
    };

    fetchApi();
  }, [debounced]);

  return (
    <HeadlessTippy
      interactive={true} // Để tương tác với tooltip (gía trị boolen)
      visible={showResult && searchResult.length > 0} // Kiểm tra điều kiện để hiện lên (giá trị boolen)
      render={(attrs) => (
        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx('search-title')}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck="false"
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx('clear')} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
