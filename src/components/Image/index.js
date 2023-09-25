import PropTypes from 'prop-types';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';
function Image({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) {
  const [fallBack, setFallBack] = useState('');
  const handleError = () => {
    setFallBack(customFallback);
  };
  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      src={fallBack || src} // fallBack để custom ảnh khi bị lỗi cho từng trường hợp riêng biệt
      alt={alt}
      {...props}
      onError={handleError}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  fallback: PropTypes.string,
};
export default forwardRef(Image);
