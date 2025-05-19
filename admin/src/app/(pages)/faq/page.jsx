"use client";

import { Backend_Endpoint } from "@/config";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [selected, setSelected] = useState("");

  const fetchdata = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/faq`);
      const data = await response.json();
      setDatas(data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [datas]);
  return <div className="flex flex-col">{datas?.map((data) => {})}</div>;
};

export default Page;
