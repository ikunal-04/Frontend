const page = () => {
    return (
      <div className="relative bg-black w-full h-[1080px] overflow-hidden text-left text-[78px] text-white font-roboto">
        <div className="absolute top-[97px] left-[calc(50%_-_446px)]">
          Transaction Successful...!
        </div>
        <div className="absolute top-[242px] left-[calc(50%_-_706px)] rounded-2xl bg-[#2F4F4F] w-[1413px] h-[729px]" />
        <div className="absolute top-[740px] left-[calc(50%_-_386px)] text-[46px] inline-block w-[773px] h-[132px]">
          <p className="m-0">Transact Id - 0xhjh65gukjg5</p>
          <p className="m-0">{`Date & time - 7 Dec 23 & 17:47`}</p>
        </div>
        <img
          className="absolute top-[340px] left-[calc(50%_-_179px)] w-[307px] h-[307px]"
          alt=""
          src="/group-5.svg"
        />
      </div>
    );
};
  
  export default page;
  