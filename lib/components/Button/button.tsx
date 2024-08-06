import {
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
  forwardRef,
} from 'react';
import styles from './button.module.css';
import { LoadingIcon } from '../LoadingIcon';
import clsx from 'clsx';
import { Slot, Slottable } from '@radix-ui/react-slot';

export type ButtonProps = {
  variant?: 'ghost' | 'contained' | 'outlined';
  size?: 'small' | 'medium' | 'large';
  color?: 'primary' | 'secondary';
  append?: ReactNode;
  appendPosition?: 'start' | 'end';
  appendWrapper?: ElementType;
  isLoading?: boolean;
  asChild?: boolean;
} & ComponentPropsWithRef<'button'>;

const AppendWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => <span className={className}>{children}</span>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      size = 'medium',
      variant = 'contained',
      color = 'primary',
      children,
      append,
      appendPosition = 'start',
      appendWrapper: AppendWrapperComponent = AppendWrapper,
      isLoading,
      asChild = false,
      disabled,
      ...rest
    },
    ref
  ) => {
    const buttonClassName = clsx(
      styles.button,
      styles[variant],
      styles[size],
      styles[color],
      {
        [styles.isLoading]: isLoading,
        [styles.withAppend]: append,
      },
      className
    );

    const appendWrapperClassName = clsx(styles.appendWrapper, styles[size]);

    const Component = asChild ? Slot : 'button';

    const renderAppendContent = (position: 'start' | 'end') => {
      const hasAppend = append && appendPosition === position;

      if (isLoading && hasAppend) {
        return (
          <span className={styles.loadingWrapper}>
            <LoadingIcon />
          </span>
        );
      }

      if (hasAppend) {
        return (
          <AppendWrapperComponent className={appendWrapperClassName}>
            {append}
          </AppendWrapperComponent>
        );
      }
      return null;
    };

    return (
      <Component
        className={buttonClassName}
        ref={ref}
        disabled={disabled || isLoading}
        {...rest}
      >
        {renderAppendContent('start')}
        <Slottable>
          {isLoading ? (
            <span className={styles.buttonContent}>{children}</span>
          ) : (
            children
          )}
        </Slottable>
        {renderAppendContent('end')}
      </Component>
    );
  }
);
