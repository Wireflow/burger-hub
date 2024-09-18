import React, { forwardRef } from "react";

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  id?: string;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({
  type,
  placeholder,
  value,
  onChange,
  className = "",
  id,
  name,
}, ref) => {
  return (
    <input
      ref={ref} // إضافة ref هنا
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring focus:border-[#091E3A] text-black ${className}`}

      id={id}
      name={name}
      required
    />
  );
});

Input.displayName = 'Input'; // يساعد في تتبع الأخطاء

export default Input;