"use client";
import Image from "next/image";
import BlogPost from "./components/blogPost/blogPost";
import Axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const backEnd: string = process.env.NEXT_PUBLIC_BACKEND_DOMAIN
    ? process.env.NEXT_PUBLIC_BACKEND_DOMAIN
    : "";

  const data = {
    title: "",
    content: "",
    author: "",
    page: 1,
  };

  const [level, setLevel] = useState(5);
  console.log(level);
  const [blogList, setBlogList] = useState<
    {
      title: string;
      content: string;
      author: string;
    }[]
  >([]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log("scrolling");
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log("fetching...");
        Axios.post(`${backEnd}/blog`, { ...data, page: level }).then(
          (response) => {
            if (response.data) {
              setLevel(level + 5);
              console.log(response.data);
              setBlogList((prevList) => [...prevList, ...response.data]);
            }
          }
        );
      }
    });
  });

  if (!blogList.length)
    Axios.post(`${backEnd}/blog`, { ...data, page: 0 }).then((response) => {
      console.log("response...");
      console.log(response.data);
      setBlogList(response.data);
    });

  return (
    <main>
      <div className="flex flex-col gap-[32px]">
        {blogList
          ? blogList.map((blog) => (
              <BlogPost
                title={blog.title}
                content={blog.content}
                author={blog.author}
              />
            ))
          : null}
      </div>
    </main>
  );
}
