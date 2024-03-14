import React from "react";
import Succes from "../../../../public/succes.svg";
import Image from "next/image";
import Link from "next/link";

function Message(props: any) {
  return (
    <div className="p-[32px] bg-white flex flex-col gap-[16px] items-center">
      <div>
        <Image src={Succes} className="w-[100px] h-[100px]" alt="" />
      </div>
      <div>Your blog was succesfully posted!</div>
      <Link
        href="/"
        className="p-[8px] border-none rounded-[50px] bg-[black] text-white duration-[0.25s] hover:bg-[white] hover:text-black "
      >
        Return home
      </Link>
    </div>
  );
}

export default Message;
