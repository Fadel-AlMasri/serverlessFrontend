"use client";
// MyButton.tsx
import React from "react";
import { extendVariants, Button } from "@nextui-org/react";
import { forwardRef } from "react";

interface MyButtonExtendedProps {
  color: string;
  endContent: React.ReactNode;
  onPress: () => void;
}
export const MyButton = forwardRef(({ ...rest }, ref) => {
  const MyButtonVariants = extendVariants(Button, {
    variants: {
      // <- modify/add variants
      color: {
        primary: "bg-primary text-white  ",
        success: "bg-success text-green-700",
        danger: "bg-red-500 text-white",
        secondary: "bg-indigo-400 text-white",
      },
      isDisabled: {
        true: "bg-[#c6c6c6] text-[#000] opacity-50 cursor-not-allowed",
      },
      size: {
        xs: "px-unit-2 min-w-unit-12 h-unit-6 text-tiny gap-unit-1 rounded-small",
        md: " h-unit-10 text-small gap-unit-2 rounded-small ",
        xl: "  h-unit-10 text-small gap-unit-4 rounded-small px-32",
        full: "px-unit-8 w-full h-unit-10 text-medium gap-unit-4 rounded-small",
      },
      padding: {
        small: "px-2 py-1",
        medium: "px-4 py-2",
        large: "px-8 py-2",
      },
    },
    defaultVariants: {
      color: "primary",
      size: "md",
      padding: "medium",
    },

    compoundVariants: [
      {
        isDisabled: true,
        color: "primary",
      },
    ],
  });

  // return <MyButtonVariants {...rest} ref={ref} />;
  return <MyButtonVariants {...rest} />;
});
