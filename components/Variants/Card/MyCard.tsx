// MyInput.tsx
import { extendVariants, Card } from '@nextui-org/react';

export const MyCard = extendVariants(Card, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        base: ['justify-start h-full '],
      },
    },
    // size: {
    //   xs: {
    //     inputWrapper: 'h-unit-6 min-h-unit-6 px-1',
    //     input: 'text-tiny',
    //   },
    //   md: {
    //     inputWrapper: 'h-unit-10 min-h-unit-10',
    //     input: 'text-small',
    //   },
    //   xl: {
    //     inputWrapper: 'h-unit-14 min-h-unit-14',
    //     input: 'text-medium',
    //   },
    // },
    // radius: {
    //   xs: {
    //     inputWrapper: 'rounded',
    //   },
    //   sm: {
    //     inputWrapper: 'rounded-[4px]',
    //   },
    // },
    // textSize: {
    //   base: {
    //     input: 'text-base',
    //   },
    // },
    // removeLabel: {
    //   true: {
    //     label: 'hidden',
    //   },
    //   false: {},
    // },
    // isDisabled: {
    //   true: {
    //     inputWrapper: [''],
    //   },
    // },
    isDisabled: {
      true: {
        base: [
          'bg-gray-200',
          'border',
          'shadow-none',
          'transition-colors',
          'opacity-100',
        ],
      },
      false: {},
    },
  },
  defaultVariants: {
    color: 'stone',
    textSize: 'base',
    size: 'lg',
  },
});
