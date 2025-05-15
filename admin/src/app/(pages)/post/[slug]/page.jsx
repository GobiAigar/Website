"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Backend_Endpoint } from "@/config";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const params = useParams();
  const id = params.slug;

  const fetchData = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/news`);
      const news = await response.json();
      setDatas([news.find((item) => item.id == id)]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container px-4 py-8 flex flex-col flex-wrap gap-4 justify-center items-center ">
      {datas.map((data) => (
        <div key={data?.id}>{data?.entitle}</div>
      ))}
    </div>
  );
};

export default Page;
