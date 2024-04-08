// MySelect.tsx
import { extendVariants, Select } from "@nextui-org/react";

export const MySelect = extendVariants(Select, {
  variants: {
    // <- modify/add variants
    color: {
      stone: {
        // parent div
        base: [
          "data-[selected=true] text-black",

          // "data-[selected=false] text-gray-500",
        ],
        // label div
        label: [],
        // input div
        mainWrapper: [],
        helperWrapper: [],
        trigger: [
          "border",
          "shadow-none",
          "transition-colors",
          "focus-within:bg-white",
          // input focus
          "data-[hover=true]:border-blue-300 ",
          "data-[hover=true]:bg-white",
          "group-data-[focus=true]:border-blue-600",
          // dark theme
          "dark:bg-blue-900",
          "dark:border-blue-800",
          "dark:data-[hover=true]:bg-blue-900",
        ],

        innerWrapper: [],
        selectorIcon: [],
        // value: ["placeholder:text-red-600"],
        listboxWrapper: [],
        listbox: [],
        popover: [],
        description: [],
      },
    },
    size: {
      xs: {
        mainWrapper: "h-unit-6 min-h-unit-6 px-1 ",
        input: "text-tiny",
      },
      md: {
        mainWrapper: "h-unit-10 min-h-unit-10  w-32 ",
        trigger: "h-unit-10 min-h-unit-10 ",
        input: "text-small",
      },
      xl: {
        mainWrapper: "h-unit-14 min-h-unit-14",
        trigger: "h-unit-14 min-h-unit-14",
        input: "text-medium",
      },
    },

    isDisabled: {
      true: {
        base: ["opacity-100"],
        label: [""],
        mainWrapper: ["opacity-100"],
        trigger: ["opacity-100", "bg-gray-100", "shadow-none", "text-black"],
        value: ["opacity-100"],
        selectorIcon: ["hidden"],
      },
      false: {
        trigger: [
          "bg-white",
          "shadow-none",
          "transition-colors",
          "opacity-100",
          "data-[focus=true]:border-blue-600",
          "data-[open=true]:border-blue-600 bg-white",
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
