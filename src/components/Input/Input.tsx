import { forwardRef, InputHTMLAttributes, useId } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  title?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ value, title, ...props }, ref) => {
    const id = useId();
    return (
      <div className="flex flex-col gap-5">
        {title && <label htmlFor={id}>{title}</label>}
        <input
          className="p-3 border-[1.5px] border-gray-300 rounded-md outline-sky-500"
          id={id}
          defaultValue={value}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);

export default Input;
