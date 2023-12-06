const page = () => {
    return (
      <div className="relative bg-black [filter:blur(9px)] w-full h-[1080px] overflow-hidden text-left text-29xl text-white font-subtle-medium">
        <div className="absolute top-[142px] left-[98px] text-[62px] leading-[20px] font-semibold font-work-sans text-darkturquoise inline-block w-[798px] h-[57px]">
          Upload your file
        </div>
        <div className="absolute top-[258px] left-[calc(50%_-_722px)] rounded-lg bg-darkslategray box-border w-[1419px] h-[381px] border-[3px] border-solid border-turquoise" />
        <div className="absolute top-[521.2px] left-[781px] text-[37.8px]">
          Upload Multimedia
        </div>
        <img
          className="absolute top-[388px] left-[894.4px] w-[108px] h-[108px] overflow-hidden"
          alt=""
          src="/iconupload.svg"
        />
        <div className="absolute top-[756px] left-[328px] rounded-3xl bg-gainsboro w-[568px] h-[122px]" />
        <div className="absolute top-[calc(50%_+_246px)] left-[calc(50%_-_463px)] font-medium font-roboto text-black inline-block w-[212px] h-[62px]">{`Pay Now `}</div>
        <img
          className="absolute top-[756px] left-[1002px] rounded-3xl w-[568px] h-[122px]"
          alt=""
          src="/rectangle-194.svg"
        />
        <div className="absolute top-[0px] left-[0px] bg-gray w-[1920px] h-16" />
        <div className="absolute top-[20px] left-[22px] bg-white w-[74px] h-7 flex flex-col items-start justify-start py-2 px-4 box-border text-sm text-slate-900">
          <div className="relative w-[45px] h-3.5">
            <div className="absolute top-[0px] left-[0px] w-[45px] h-3.5 flex flex-row items-center justify-start gap-[4px]">
              <div className="relative leading-[20px] font-medium">Logo</div>
              <img
                className="relative w-3 h-3 overflow-hidden shrink-0"
                alt=""
                src="/iconchevrondown.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[786px] left-[1136px] font-semibold">
          Do it for Free
        </div>
      </div>
    );
  };
  
  export default page;
  