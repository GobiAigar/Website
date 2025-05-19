"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Backend_Endpoint } from "@/config";
import SlugNews from "@/components/static/SlugNews";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const params = useParams();
  const id = params.slug;

  const fetchData = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/news/${id}`);
      const news = await response.json();
      setDatas(news);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <SlugNews data={datas[0]} />;
};

export default Page;
