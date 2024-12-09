import { cva } from "class-variance-authority";
import { useEffect, useState } from "react";
import { TToast } from "../../contexts/toast.context";
interface WhiteModalProps {
  toast: TToast; // toast prop의 타입 정의
}

const whiteModalVariant = cva(
  "border bg-white rounded-lg flex p-6 shadow-lg w-[320px] transition items-center duration-500", // 기본 스타일
  {
    variants: {
      isDisplayed: {
        true: "translate-x-0", // 나타날 때
        false: "translate-x-[calc(100%+40px)]", // 안 보일 때
      },
    },
    defaultVariants: {
      isDisplayed: true,
    },
  }
);
function WhiteModal({ toast }: WhiteModalProps) {
  const [isDisplayed, setIsDisplayed] = useState<boolean>(false);

  useEffect(() => {
    setIsDisplayed(true);
    setTimeout(() => setIsDisplayed(false), toast.seconds - 500);
  }, [toast.seconds]);

  const handleDelete = (): void => {
    setIsDisplayed(false);
  };

  return (
    <div className={whiteModalVariant({ isDisplayed })} onClick={handleDelete}>
      <div className="flex flex-col">
        <h5 className="font-semibold">{toast.text}</h5>
      </div>
    </div>
  );
}

export default WhiteModal;
