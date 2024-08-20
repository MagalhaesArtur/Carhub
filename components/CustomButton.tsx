"use client";

import Image from "next/image";
import { MouseEventHandler } from "react";

interface CustomButtonProps {
  title: string;
  handleClick: MouseEventHandler<HTMLButtonElement>;
  containerStyles?: string;
  btnType?: "submit" | "reset" | "button" | undefined;
}

function CustomButton({
  title,
  containerStyles,
  handleClick,
  btnType,
}: CustomButtonProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
}

export default CustomButton;
