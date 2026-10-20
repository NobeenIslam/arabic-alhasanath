import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// The omit part was to add id attributes to the type. React.ElementType doesn't contain all the attributes I need. Syntax works for a type but not an interface
type FadeUpWrapperProps<T extends React.ElementType = 'div'> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, 'as' | 'children' | 'className'>;

export const FadeUpWrapper = <T extends React.ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: FadeUpWrapperProps<T>) => {
  const [isVisible, ref] = useIntersectionObserver();
  const Component = as || 'div';

  return (
    <Component
      ref={ref}
      className={`${className} ${
        isVisible
          ? 'animate-in duration-800 fade-in slide-in-from-bottom-8'
          : 'opacity-0'
      } `}
      {...props}
    >
      {children}
    </Component>
  );
};
