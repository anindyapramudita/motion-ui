import { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.css';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const { className, children, ...restProps } = props;
  return (
    <button className={`${className} ${styles.button}`} {...restProps}>
      {children}
    </button>
  );
};
