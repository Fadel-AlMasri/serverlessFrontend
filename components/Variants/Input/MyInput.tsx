'use client';

import { extendVariants, Input } from '@nextui-org/react';

export const MyInput = extendVariants(Input, {
  variants: {
    color: {
      search: {
        inputWrapper: [
          'bg-white',
          'border',
          'shadow-none',
          'transition-colors',
          'focus-within:bg-white',
          'data-[hover=true]:border-blue-300',
          'data-[hover=true]:bg-white',
          'group-data-[focus=true]:border-blue-600',
          'group-data-[focus=true]:bg-white',
          'dark:bg-zinc-900',
          'dark:border-zinc-800',
          'dark:data-[hover=true]:bg-zinc-900',
        ],
        input: [
          'text-zinc-800',
          'placeholder:text-zinc-400',
          'dark:text-zinc-400',
          'dark:placeholder:text-zinc-600',
        ],
      },
      stone: {
        inputWrapper: [
          'bg-gray-50',
          'border',
          'shadow-none',
          'transition-colors',
          'focus-within:bg-white',
          'data-[hover=true]:border-blue-300',
          'data-[hover=true]:bg-white',
          'group-data-[focus=true]:border-blue-600',
          'dark:bg-zinc-900',
          'dark:border-zinc-800',
          'dark:data-[hover=true]:bg-zinc-900',
          'dark:focus-within:bg-red-900',
        ],
        input: [
          'text-zinc-800',
          'placeholder:text-red-500',
          'dark:text-zinc-400',
          'dark:placeholder:text-zinc-600',
        ],
      },
    },
    size: {
      xs: {
        inputWrapper: 'h-unit-10 min-h-unit-6 px-1 w-[200px]',
        input: 'text-tiny',
      },
      md: {
        inputWrapper: 'h-unit-10 min-h-unit-10',
        input: 'text-small',
      },
      lg: {
        inputWrapper: 'h-unit-12 min-h-unit-12 ',
        input: 'text-medium',
      },
      xl: {
        inputWrapper: 'h-unit-14 min-h-unit-14',
        input: 'text-medium',
      },
      unitSize: {
        inputWrapper: 'h-unit-12 min-h-unit-12 pl-3 pr-0.5',
        input: 'text-medium',
      },
      search: {
        inputWrapper: 'h-unit-11 text-small gap-unit-2 rounded-small w-full',
      },
    },
    radius: {
      xs: {
        inputWrapper: 'rounded',
      },
      sm: {
        inputWrapper: 'rounded-[4px]',
      },
      lg: {
        inputWrapper: '',
      },
    },
    textSize: {
      base: {
        input: 'text-base',
      },
    },
    removeLabel: {
      true: {
        label: 'hidden',
      },
      false: {},
    },
    isDisabled: {
      true: {
        inputWrapper: [''],
      },
    },
    isReadOnly: {
      true: {
        base: ['opacity-100'],

        inputWrapper: [
          'bg-gray-100',
          'shadow-none',
          'transition-colors',
          '!opacity-100',
        ],
        input: [
          'text-black',
          'placeholder:text-black',

          'dark:text-black',
          'dark:placeholder:text-black',
        ],
      },
      false: {
        inputWrapper: [
          'bg-white',
          'shadow-none',
          'transition-colors',
          'opacity-100',
        ],
        input: [
          'text-black',
          'placeholder:text-zinc-400',
          'dark:text-black',
          'dark:placeholder:text-black',
        ],
      },
    },
  },

  defaultVariants: {
    color: 'stone',
    textSize: 'base',
    size: 'lg',
  },
});
