"use client ";

import { useState } from "react";

import { Grid, Card, CardHeader, Divider, Button } from "@mui/material";

import TextField from "@mui/material/TextField";

function Forms() {
  const [titleMn, setTitleMn] = useState("");
  const [titleEn, setTitleEn] = useState("");
  const [authorMn, setAuthorMn] = useState("");
  const [authorEn, setAuthorEn] = useState("");
  const [contentMn, setContentMn] = useState("");
  const [contentEn, setContentEn] = useState("");
  const [image, setImage] = useState("");

  const submitEvent = async () => {
    const formData = new FormData();
    formData.append("titleMn", titleMn);
    formData.append("titleEn", titleEn);
    formData.append("authorMn", authorMn);
    formData.append("authorEn", authorEn);
    formData.append("contentMn", contentMn);
    formData.append("contentEn", contentEn);
    formData.append("image", image);

    console.log("formData", formData);

    //     try {
    //       const response = await fetch("/api/post", {
    //         method: "POST",
    //         body: formData,
    //       });
    //       if (response.ok) {
    //         console.log("Post created successfully");
    //       } else {
    //         console.error("Error creating post");
    //       }
    //     } catch (error) {
    //       console.error("Error:", error);
    //     }
  };

  return (
    <div className="container  flex flex-wrap gap-4 justify-center items-center">
      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        spacing={3}
        width={600}
      >
        <Grid item xs={6}>
          <Card>
            <CardHeader title="Мэдээ нэмэх хэсэг" />
            <Divider />

            <div className="flex gap-4 p-4 w-full">
              <div className="flex flex-col w-1/2 gap-4 mt-4">
                <TextField
                  required
                  id="outlined-required"
                  label="Гарчиг"
                  placeholder="Монгол"
                  onChange={(e) => setTitleMn(e.target.value)}
                  value={titleMn}
                />

                <TextField
                  required
                  id="outlined-required"
                  label="Нийтлэл бичсэн"
                  placeholder="Монгол"
                  onChange={(e) => setAuthorMn(e.target.value)}
                  value={authorMn}
                />

                <TextField
                  required
                  id="mongol-content"
                  label="Мэдээ"
                  multiline
                  rows={4}
                  placeholder="Монгол"
                  onChange={(e) => setContentMn(e.target.value)}
                  value={contentMn}
                />
              </div>
              <div className="flex flex-col w-1/2 gap-4 mt-4">
                <TextField
                  className="w-full"
                  required
                  id="outlined-required"
                  label="Аuthor"
                  placeholder="English"
                  onChange={(e) => setAuthorEn(e.target.value)}
                  value={authorEn}
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Title"
                  placeholder="English"
                  onChange={(e) => setTitleEn(e.target.value)}
                  value={titleEn}
                />
                <TextField
                  required
                  id="content"
                  label="Content"
                  multiline
                  rows={4}
                  placeholder="English"
                  onChange={(e) => setContentEn(e.target.value)}
                  value={contentEn}
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-4 pt-0 p-4">
              <TextField
                xs={{ width: "100%" }}
                required
                type="file"
                onChange={(e) => setImage(e.target.value)}
              />
              <div className="border flex justify-center items-center rounded-md ">
                <Button type="submit" onClick={submitEvent}>
                  Submit
                </Button>
              </div>
            </div>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Forms;
