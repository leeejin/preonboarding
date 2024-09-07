export type TUser = {
  avatar?: string | null;
  id: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
  nickname: FormDataEntryValue | null;
};
export type TLoginUser = Omit<TUser, "nickname" | "avatar">;
