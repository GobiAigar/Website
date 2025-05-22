"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  CircularProgress,
  Stack,
} from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

const VisuallyHiddenInput = (props) => (
  <input
    style={{
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      whiteSpace: "nowrap",
      width: 1,
    }}
    {...props}
  />
);

const FileUploader = () => {
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      setPreview(data.url);
      console.log(" Cloudinary URL:", data.url);
    } catch (error) {
      console.error(" Upload error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Button
        component="label"
        variant="contained"
        startIcon={<CloudUploadIcon />}
        disabled={loading}
      >
        Зураг оруулах
        <VisuallyHiddenInput
          type="file"
          onChange={handleUpload}
          accept="image/*"
        />
      </Button>

      {loading && (
        <Box mt={2}>
          <CircularProgress size={24} />
        </Box>
      )}

      {preview && (
        <Box mt={2}>
          <img src={preview} alt="Uploaded" style={{ maxWidth: 300 }} />
        </Box>
      )}
    </Box>
  );
};

export default FileUploader;
