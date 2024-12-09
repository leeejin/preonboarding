import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { Link } from "react-router-dom";

type ButtonProps = ButtonVariantProps &
  (
    | ({ to?: undefined } & ComponentProps<"button">)
    | ({ to: string } & ComponentProps<typeof Link>)
  );
type ButtonVariantProps = VariantProps<typeof buttonVariant>;
const buttonVariant = cva("hover:font-bold", {
  variants: {
    intent: {
      white: "border p-3 rounded-md hover:brightness-50 transition-all",
      default: "text-white",
    },
  },
  defaultVariants: {
    intent: "default",
  },
});
function Button({ children, intent, ...props }: ButtonProps) {
  if (props.to) {
    return (
      <Link className={buttonVariant({ intent })} {...props}>
        {children}
      </Link>
    );
  } else if (typeof props.to === "undefined") {
    return (
      <button className={buttonVariant({ intent })} {...props}>
        {children}
      </button>
    );
  }
}

export default Button;
