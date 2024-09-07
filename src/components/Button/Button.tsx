import { ComponentProps } from "react";
import { Link } from "react-router-dom";

type ButtonProps =
  | ({ to?: undefined } & ComponentProps<"button">)
  | ({ to: string } & ComponentProps<typeof Link>);

function Button({ children, ...props }: ButtonProps) {
  if (props.to) {
    return (
      <Link className="text-white hover:font-bold" {...props}>
        {children}
      </Link>
    );
  } else if (typeof props.to === "undefined") {
    return (
      <button className="text-white  hover:font-bold" {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
