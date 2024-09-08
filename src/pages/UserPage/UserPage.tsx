import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import DefaultUserImage from "../../../public/default-user-profile.svg";
import Input from "../../components/Input";
import { useAuthMutation } from "../../hooks/mutation";
import { useAuthQuery } from "../../hooks/query";

function UserPage() {
  const { data: user } = useAuthQuery();
  const { userInfoMutation } = useAuthMutation();

  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string>(DefaultUserImage);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (user?.avatar) setPreview(user.avatar);
  }, [user?.avatar]);

  const handleUpdateImage = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpdateProfile = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const info = new FormData(e.currentTarget);
    const nickname = info.get("nickname") as string;

    const formData = new FormData();
    if (file) formData.append("avatar", file);
    formData.append("nickname", nickname);

    userInfoMutation(formData);
  };

  return (
    <div>
      <div>
        <form onSubmit={handleUpdateProfile} className="flex flex-col gap-5">
          <img
            src={preview}
            className="rounded-full cursor-pointer"
            width={100}
            height={100}
            alt={`${user?.nickname}의 프로필 이미지`}
            onClick={() => fileInputRef.current?.click()}
          />
          <Input
            type="file"
            className="hidden"
            name="avatar"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleUpdateImage}
          />
          <Input title={"id"} value={user?.id} readOnly />
          <Input title={"nickname"} name="nickname" value={user?.nickname} />

          <button
            className="border p-3 rounded-md hover:brightness-50 transition-all"
            type="submit"
          >
            회원정보 수정
          </button>
        </form>
      </div>
    </div>
  );
}

export default UserPage;
