import React from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  type: string;
  placeholder: string;
  className: string;
  error: FieldError | undefined;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  error,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <label className="text-sm font-bold">Email address</label>
          {error ? (
            <span className="text-sm font-bold text-[#bc7f7a]">
              Valid email required
            </span>
          ) : (
            <></>
          )}
        </div>
        <input
          className={`${className} ${error ? "border-[#bc7f7a] bg-[#fee8e6] placeholder:text-[#bc7f7a]" : ""}`.trim()}
          type={type}
          placeholder={placeholder}
          {...props}
        />
      </div>
    </>
  );
};

export default Input;
