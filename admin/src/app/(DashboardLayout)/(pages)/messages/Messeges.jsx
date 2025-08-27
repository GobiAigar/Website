"use client";
import { useEffect, useState } from "react";
import { Box, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { DataGrid } from "@mui/x-data-grid";

import DeleteButton from "../../components/features/DeleteButton";
import SeeMessages from "./SeeMessages";

const columns = () => [
  {
    field: "index",
    headerName: "№",
    width: 70,
    align: "center",
    headerAlign: "center",
  },

  {
    field: "firstname",
    headerName: "Нэр",
    flex: 1,
    align: "center",
    headerAlign: "center",
  },
  {
    field: "phonenumber",
    headerName: "Утасны дугаар",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <a
        href={`tel:${params.value}`}
        style={{
          color: "#1976d2",
          textDecoration: "underline",
          cursor: "pointer",
        }}
      >
        {params.value}
      </a>
    ),
  },
  {
    field: "email",
    headerName: "И-мэйл",
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => {
      const handleCopy = () => {
        navigator.clipboard.writeText(params.value).then(() => {
          alert("Имэйл хуулагдлаа!");
        });
      };

      return (
        <span
          onClick={handleCopy}
          style={{
            color: "#1976d2",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          {params.value}
        </span>
      );
    },
  },
  {
    field: "date",
    headerName: "Огноо",
    flex: 1,

    align: "center",
    headerAlign: "center",
    valueGetter: (params) => {
      if (!params) return "Огноо байхгүй";
      const date = new Date(params);
      if (isNaN(date.getTime())) return "Огноо буруу";
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hour = String(date.getHours()).padStart(2, "0");
      const minute = String(date.getMinutes()).padStart(2, "0");
      return `${year}/${month}/${day}-${hour}:${minute}`;
    },
  },
  {
    field: "actions",
    headerName: "Үйлдэл",
    width: 130,
    align: "center",
    headerAlign: "center",
    renderCell: (params) => (
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <SeeMessages id={params.row} />
        <DeleteButton type="messages" id={params.row} />
      </Box>
    ),
  },
];

const Messeges = ({ datas }) => {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (datas && datas.length > 0) {
      const updatedRows = datas.map((item, idx) => ({
        ...item,
        index: idx + 1,
      }));
      setRows(updatedRows);
    }
  }, [datas]);

  const handleRowDelete = (id) => {
    setRows((prevRows) => {
      const updatedRows = prevRows
        .filter((row) => row.id !== id)
        .map((row, idx) => ({
          ...row,
          index: idx + 1,
        }));
      return updatedRows;
    });
  };

  return (
    <Box sx={{ height: "auto", position: "relative" }}>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <MuiAlert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </MuiAlert>
      </Snackbar>

      <DataGrid
        rows={rows}
        columns={columns(setSnackbar, handleRowDelete)}
        getRowId={(row) => row.id}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        sx={{
          border: "2px solid #ddd",
          borderRadius: 2,
          "& .MuiDataGrid-cell": {
            borderRight: "1px solid #ddd",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          },
          "& .MuiDataGrid-row": {
            borderBottom: "1px solid #ddd",
          },
          "& .MuiDataGrid-columnHeaders": {
            borderBottom: "1px solid #ddd",
            borderRight: "1px solid #ddd",
          },
          "& .MuiDataGrid-columnHeader": {
            borderRight: "1px solid #ddd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          },
          "& .MuiDataGrid-columnHeaderTitle": {
            textAlign: "center",
            width: "100%",
          },
        }}
      />
    </Box>
  );
};

export default Messeges;
