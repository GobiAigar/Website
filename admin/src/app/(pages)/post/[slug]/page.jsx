"use client";

import { useParams } from "next/navigation";
import datas from "../../../../components/constants/constants.json";

import React from "react";

const Page = () => {
  const params = useParams();
  const news = params.slug;

  return (
    <div className="container px-4 py-8 flex flex-col flex-wrap gap-4 justify-center items-center ">
      {(() => {
        const data = datas?.news.find((data) => data.id == news);
        return data && <div key={data.id}>{data.title}</div>;
      })()}
    </div>
  );
};

export default Page;
