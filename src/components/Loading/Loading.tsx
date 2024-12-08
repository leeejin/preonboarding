import LoadingIcon from "../../../public/icon-loading.png";
const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2">
      <img src={LoadingIcon} width={100} height={100} alt={"로딩중"} />
    </div>
  );
};

export default Loading;
