// MyInput.tsx
import { extendVariants, Textarea } from "@nextui-org/react";

export const MyTextarea = extendVariants(Textarea, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // <- add a new color variant
        base: ["justify-start h-full "],
        label: [""],

        inputWrapper: [
          "max-h-none",
          "justify-start items-start border border-gray-200",
          "!h-full ",
          "bg-gray-50",
          "shadow-none",
          "transition-colors",
          "focus-within:bg-white",
          // input focus
          "data-[hover=true]:border-blue-300",
          "data-[hover=true]:bg-white",

          "group-data-[focus=true]:border-blue-600",
          // dark theme
          "dark:bg-zinc-900",
          "dark:border-zinc-800",
          "dark:data-[hover=true]:bg-zinc-900",
          "dark:focus-within:bg-red-900",
          "overflow-scroll",
        ],
        input: [
          // <- Input element slot'
          "max-h-none",
          " py-1",
          "h-full",
          "text-zinc-800",
          "placeholder:text-zinc-100",

          // dark theme
          "dark:text-zinc-400",
          "dark:placeholder:text-zinc-100",
        ],
        description: [],
        errorMessage: [],
      },
    },
    size: {
      xs: {
        inputWrapper: "h-unit-6 min-h-unit-6 px-1",
        input: "text-tiny",
      },
      md: {
        inputWrapper: "h-unit-10 min-h-unit-10",
        input: "text-small",
      },
      xl: {
        inputWrapper: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
    },
    radius: {
      xs: {
        inputWrapper: "rounded",
      },
      sm: {
        inputWrapper: "rounded-[4px]",
      },
    },
    textSize: {
      base: {
        input: "text-base",
      },
    },
    removeLabel: {
      true: {
        label: "hidden",
      },
      false: {},
    },
    isDisabled: {
      true: {
        inputWrapper: [""],
      },
    },
    isReadOnly: {
      true: {
        base: ["opacity-100"],
        inputWrapper: [
          // 'bg-gray-200',
          // 'border',
          // 'shadow-none',
          // 'transition-colors',
          // 'opacity-100',
          "bg-gray-100",
          "shadow-none",
          "transition-colors",
          "!opacity-100",
        ],
        input: [
          // 'text-black',
          // 'placeholder:text-black',
          // 'dark:text-black',
          // 'dark:placeholder:text-black',
          "text-black",
          "placeholder:text-black",

          "dark:text-black",
          "dark:placeholder:text-black",
        ],
      },
      false: {
        inputWrapper: [
          "bg-white",
          "shadow-none",
          "transition-colors",
          "opacity-100",
        ],
        input: [
          "text-black",
          "placeholder:text-gray-400",
          "dark:text-black",
          "dark:placeholder:text-black",
        ],
      },
    },
  },
  defaultVariants: {
    color: "stone",
    textSize: "base",
    size: "lg",
  },
});
