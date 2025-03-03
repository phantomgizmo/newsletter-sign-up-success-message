import React from "react";
import { FieldError } from "react-hook-form";

import "./Input.css";

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
      <div className="form-group">
        <label className="form-group__label">Email address</label>
        <Input
          className="form-group__input"
          type="email"
          placeholder="email@company.com"
          error={form.formState.errors?.email}
          {...form.register("email")}
        />
      </div>
      <input
        className={`${className}  ${error ? "input-error" : ""}`}
        type={type}
        placeholder={placeholder}
        {...props}
      />
    </>
  );
};

export default Input;
