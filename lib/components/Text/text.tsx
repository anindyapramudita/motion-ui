import { ComponentPropsWithRef, forwardRef } from 'react';
import styles from './text.module.css';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { TextVariantType } from './text.types';
import clsx from 'clsx';

export type TextProps = {
  asChild?: boolean;
  variant: TextVariantType;
} & ComponentPropsWithRef<'p'>;

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, className, variant, asChild = false, ...rest }, ref) => {
    const textClassName = clsx(styles.text, styles[variant], className);

    const Comp = asChild ? Slot : 'p';

    return (
      <Comp ref={ref} {...rest} className={textClassName}>
        <Slottable>{children}</Slottable>
      </Comp>
    );
  }
);
