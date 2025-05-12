import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ProductImageList({
  itemData = [],
  cols = 4,
  gap = 0,
  itemStyle = {}, 
}) {
  return (
    <ImageList cols={cols} gap={gap}>
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          style={{
            position: "relative",
            borderRadius: "1px",
            overflow: "hidden",
            ...itemStyle, 
          }}
        >
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "20px",
              background: "rgba(0, 0, 0, 0.4)",
              textShadow: "0px 0px 2px black",
            }}
          >
            {item.title}
          </div>
        </ImageListItem>
      ))}
    </ImageList>
  );
}
