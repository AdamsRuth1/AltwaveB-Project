// import React, { useState } from "react";
import LazyImage from "../dashboard/PayTuition/LazyImamge";
const Post = ({ Blogs }) => {
  return (
    <main className="pt-[4.5rem]">
      <div className="grid grid-cols-3 ">
        {Blogs.map((posts, index) => (
          <div key={index}>
            <div className="px-4">
              <LazyImage src={posts.imgUrl} alt={posts.choice1} />
            </div>
            <div className="pt-[1rem]">
              <h2 className="font-Modarat font-bold text-[20px] leading-[32px] text-[#0A0E27] w-[396.67px] h-[64px]">
                {posts.heading}
              </h2>
              <div className="flex gap-[1.6rem] pb-[5rem] pt-[1.6rem] font-Modarat font-normal text-[14px] leading-[16px] text-[#4B56A0]">
                <p>{posts.choice1}</p>
                <p>{posts.choice2}</p>
                <p>{posts.choice3}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Post;
