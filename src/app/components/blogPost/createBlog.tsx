"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import Popup from "../popup/popup";
import Message from "../popup/message";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [success, setSuccess] = useState(false);
  const backEnd: string = process.env.NEXT_PUBLIC_BACKEND_DOMAIN
    ? process.env.NEXT_PUBLIC_BACKEND_DOMAIN
    : "";
  console.log(backEnd);

  return (
    <div className="flex flex-col gap-[16px] w-[50%] m-auto">
      <div className="w-[100%]">
        <input
          className="w-[100%] text-[48px] border-b-[1px] border-b-gray-200"
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="w-[100%] m-[8px]">
        <textarea
          className="w-[100%]"
          placeholder="Type your content here..."
          name=""
          id=""
          cols={30}
          rows={10}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </div>
      <button
        className="w-[100px] h-[50px] border-none rounded-[50px] bg-[black] text-white duration-[0.25s] hover:bg-[white] hover:text-black "
        onClick={() => {
          axios
            .post(`${backEnd}/upload-blog`, { title, content })
            .then((response: any) => {
              if (response.data) setSuccess(true);
            });
        }}
      >
        Post
      </button>

      {success ? (
        <Popup>
          <Message />
        </Popup>
      ) : null}
    </div>
  );
}

export default CreateBlog;
