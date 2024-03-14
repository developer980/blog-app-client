import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between align-items-center h-[100px]">
      <div className="w-[50%] text-[30px] flex items-center">Blog</div>
      <div className="flex w-[50%] text-[20px] justify-around items-center">
        <Link href="/">Home</Link>
        <Link href="/createBlog">Create a blog</Link>
        <Link href="/blog">Settings</Link>
        <Link href="/profile">
          <b>Profile</b>
        </Link>
      </div>
    </div>
  );
}

export default Header;
