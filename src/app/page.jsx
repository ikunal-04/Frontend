import Image from 'next/image'
import Banner from './components/banner'
import UploadFile from "./components/uploadfile";

export default function Home() {
  return (
    <div className="container mx-0 flex flex-col justify-around h-screen">
    <div className="container mx-0">
    <Banner/>
      {/* <ConnectWallet/> */}
    </div>
  </div>
  )
}