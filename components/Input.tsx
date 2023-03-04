import React, { ReactHTMLElement } from "react";
interface InputProps {
  id: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
}
const Input: React.FC<InputProps> = ({
  id,
  placeholder,
  value,
  onChange,
  type,
}) => {
  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        className="bg-zinc-800 w-full rounded-md text-base outline-none
              px-6
              pt-6
              pb-2
        appearance-none
        focus:outline-none
        focus:ring-0
        peer
        invalid:border-b-1
         "
        placeholder=" "
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="
        absolute 
        text-sm
      text-zinc-400
        duration-150 
        transform 
        -translate-y-3 
        scale-75 
        top-4 
        z-9 
        origin-[0] 
        left-6
        peer-placeholder-shown:scale-100 
        peer-placeholder-shown:translate-y-0 
        peer-focus:scale-75
        peer-focus:-translate-y-3
      "
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
