import clsx from "clsx";
import { useEffect, useState } from "react";
import { TToast } from "../../contexts/toast.context";
interface WhiteModalProps {
  toast: TToast; // toast prop의 타입 정의
}
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
    <div
      className={clsx(
        "border bg-white rounded-lg flex p-6 shadow-lg w-[320px] transition items-center duration-500",
        {
          "translate-x-0": isDisplayed, // 나타날때
          "translate-x-[calc(100%+40px)]": !isDisplayed, // 안보일때
        }
      )}
      onClick={handleDelete}
    >
      <div className="flex flex-col">
        <h5 className="font-semibold">{toast.text}</h5>
      </div>
    </div>
  );
}

export default WhiteModal;
