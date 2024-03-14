import React from "react";
import LikeIcon from "../../../../public/like.svg";
import CommentIcon from "../../../../public/comment.svg";
import ShareIcon from "../../../../public/share.svg";
import Image from "next/image";

function BlogPost(props: any) {
  const { title, content, author } = props;
  return (
    <div className="w-[50%] m-auto flex flex-col gap-[16px]">
      <div>
        <div className="text-[48px]">{title}</div>
        <div className="text-gray-400">
          <i>By {author}</i>
        </div>
      </div>
      <div>
        <div className="m-[8px] text-[20px]">{content}</div>
        <div className="flex justify-around border-t-[1px] border-gray-200">
          <div>
            <Image className="h-[50px] w-[30px]" src={LikeIcon} alt="" />
          </div>
          <div>
            <Image className="h-[50px] w-[30px]" src={CommentIcon} alt="" />
          </div>
          <div>
            <Image className="h-[50px] w-[30px]" src={ShareIcon} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
