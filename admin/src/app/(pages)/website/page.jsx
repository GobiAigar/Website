"use client";
import HomeHero from "@/components/static/HomeHero";
import InputSection from "@/components/static/InputSection";
import MnHomeHero from "@/components/static/MnHomeHero";
import { Backend_Endpoint } from "@/config";
import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [section, setSection] = useState();
  const [filteredData, setFilteredData] = useState([]);

  const fetchdata = async () => {
    try {
      const response = await fetch(`${Backend_Endpoint}/api/website`);
      const data = await response.json();
      setFilteredData(data[0].title);
      setDatas(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  useEffect(() => {
    setFilteredData(datas.find((item) => item.title == section));
  }, [section]);

  if (!datas)
    return (
      <div className="h-screen w-screen flex items-center justify-center ">
        loading
      </div>
    );

  return (
    <div className="flex w-screen container pt-8 ">
      <div className="w-1/2 min-h-screen px-4 flex flex-col gap-4 ">
        <HomeHero data={filteredData} />
        <MnHomeHero data={filteredData} />
      </div>
      <div className="w-1/2 min-h-screen">
        <FormControl fullWidth className="!px-4">
          <Select
            id="sectionSelect"
            value={section || datas[0]?.title || ""}
            onChange={(e) => {
              setSection(e.target.value);
            }}
          >
            {datas.map((item, index) => (
              <MenuItem key={item?.index} value={item?.title}>
                {item?.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <InputSection data={filteredData} section={section} />
      </div>
    </div>
  );
};

export default Page;
