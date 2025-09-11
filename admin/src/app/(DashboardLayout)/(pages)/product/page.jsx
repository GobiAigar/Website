"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Backend_Endpoint } from "@/constants/constants";
import Loading from "../../loading";
import {
  Box,
  Grid,
  IconButton,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogActions,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import EditProduct from "./EditProduct";
import SeeDetailsProduct from "./SeeDetailsProduct";
import { IconEdit, IconEye } from "@tabler/icons-react";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedData, setSelecedData] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Backend_Endpoint}/api/product`);
      const data = await response.json();

      setDatas(data?.data?.response?.rows);

      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  if (loading) return <Loading />;

  const columns = [
    {
      field: "index",
      headerName: "№",
      width: 70,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => {
        return <Box>{params?.id}</Box>;
      },
    },
    {
      field: "title",
      headerName: "Нэр",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "entitle",
      headerName: "Гарчиг /Англи/",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "mntitle",
      headerName: "Гарчиг /Монгол/",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "mndescription",
      headerName: "Тайлбар /Монгол/",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "endescription",
      headerName: "Тайлбар /Англи/",
      flex: 1,
      headerAlign: "center",
    },
    {
      field: "actions",
      headerName: "Үйлдэл",
      width: 120,
      sortable: false,
      headerAlign: "center",
      align: "center",
      renderCell: (params) => (
        <Box
          sx={{
            display: "flex",
            gap: 0.5,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <SeeDetailsProduct data={params.row} />
          <EditProduct data={params.row} />
        </Box>
      ),
    },
  ];

  return (
    <PageContainer title="Бүтээгдэхүүн">
      <Grid container spacing={2}>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            marginBottom: 3,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></Box>
        <Box sx={{ height: "auto", width: "100%" }}>
          <DataGrid
            rows={datas}
            columns={columns}
            getRowId={(row) => row.id}
            initialState={{
              pagination: { paginationModel: { pageSize: 11 } },
            }}
            pageSizeOptions={[11]}
            sx={{
              border: "2px solid rgba(224, 224, 224, 1)",
              "& .MuiDataGrid-cell": {
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              },
              "& .MuiDataGrid-columnHeaders": {
                borderBottom: "2px solid rgba(224, 224, 224, 1)",
              },
              "& .MuiDataGrid-columnHeader": {
                borderRight: "1px solid rgba(224, 224, 224, 1)",
              },
              "& .MuiDataGrid-row": {
                borderBottom: "1px solid rgba(224, 224, 224, 1)",
              },
            }}
          />
        </Box>
      </Grid>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={() => setSuccessOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSuccessOpen(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Амжилттай шинэчлэгдлээ
        </Alert>
      </Snackbar>
    </PageContainer>
  );
};

export default Page;
