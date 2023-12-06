import Link from "next/link";

const Desktop6 = () => {
    return (
      <div className="relative bg-black h-[1000px] overflow-hidden text-left text-[38px] text-white font-roboto flex flex-col space-between">
        <div className="absolute top-[0px] left-[0px] [background:linear-gradient(127.75deg,_#21cab1,_rgba(107,_74,_200,_0))] w-[800px] h-[1000px]" />
        <b className="absolute top-[495px] left-[980px] tracking-[0.17em]">
          Connect Wallet
        </b>
        <b className="absolute top-[330px] left-[73px] text-[90px]">
          <p className="m-0">{`Get `}</p>
          <p className="m-0">Unlimited</p>
          <p className="m-0">Permanent</p>
          <p className="m-0">Storage</p>
        </b>
        <div className="absolute top-[602px] left-[972px] rounded-[20px] bg-darkslategray box-border w-[390px] h-[102px] border-[6px] border-solid border-turquoise" />
        <Link href={'/uploadFile'}>
        <button className="absolute top-[625px] left-[1000px] text-[45px] inline-block font-inter w-[345px]" type="button">
          Connect Wallet
        </button>
        </Link>
      </div>
    );
  };
  
  export default Desktop6;