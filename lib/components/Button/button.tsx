import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import styles from './styles.module.css';
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'primary' | 'secondary';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  isLoading?: boolean;
  loadingPosition?: 'start' | 'center' | 'end';
}
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    className,
    variant = 'contained',
    color = 'primary',
    children,
    startIcon,
    endIcon,
    isLoading,
    loadingPosition = 'start',
    ...restProps
  }) => {
    const variantClass = styles[variant];
    const colorClass = styles[color];
    const loadingClass =
      isLoading && loadingPosition === 'center' ? styles.loadingButton : '';

    const buttonClassName = [
      styles.button,
      variantClass,
      colorClass,
      className,
      loadingClass,
    ].join(' ');

    const loadingCenterClassName =
      loadingPosition === 'center' ? styles.loadingCenter : '';
    const loadingClassName = [
      styles.loadIconContainer,
      variantClass,
      loadingCenterClassName,
    ].join(' ');

    const iconClassName = isLoading
      ? loadingPosition === 'center'
        ? styles.iconContainerHidden
        : styles.iconContainerNone
      : styles.iconContainer;

    return (
      <button
        className={buttonClassName}
        {...restProps}
        disabled={restProps.disabled || isLoading}
        data-testid="button-component"
      >
        {isLoading && loadingPosition === 'start' && (
          <LoadingIcon loadingClassName={loadingClassName} />
        )}
        {!!startIcon && <div className={iconClassName}>{startIcon}</div>}
        {children}
        {!!endIcon && <div className={iconClassName}>{endIcon}</div>}
        {isLoading &&
          (loadingPosition === 'end' || loadingPosition === 'center') && (
            <LoadingIcon loadingClassName={loadingClassName} />
          )}
      </button>
    );
  }
);

const LoadingIcon = ({ loadingClassName }: { loadingClassName: string }) => {
  return (
    <div className={loadingClassName} data-testid="loading-icon">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
