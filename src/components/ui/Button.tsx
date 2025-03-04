import React from "react";

const Button = ({
  children,
  type,
  onClick,
}: {
  children: string;
  type?: "submit" | "reset" | "button" | undefined;
  onClick?: React.MouseEventHandler;
}) => {
  return (
    <button
      className="relative z-1 cursor-pointer rounded-lg bg-blue-800 py-4 text-white outline-0 hover:bg-linear-to-r hover:from-[#ff5379] hover:to-[#ff6841] hover:shadow-[-10px_10px_30px_-10px] hover:shadow-[#ff5379] active:bg-blue-700"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
