"use client";
import PageContainer from "@/app/(DashboardLayout)/components/container/PageContainer";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Backend_Endpoint } from "@/constants/constants";
import Loading from "../../loading";
import { Box, Grid, Snackbar, Alert } from "@mui/material";
import SeeMessages from "./SeeMessages";
import DeleteButton from "../../components/features/DeleteButton";

const Page = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);

  const fetchdata = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${Backend_Endpoint}/api/messages`);
      const data = await response.json();

      setDatas(data?.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleRefresh = () => {
    fetchdata();
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
      renderCell: (params) => <Box>{params.row.id}</Box>,
    },
    { field: "firstname", headerName: "Хэрэглэгчийн нэр", flex: 1 },
    { field: "email", headerName: "И-майл", flex: 1 },
    { field: "phonenumber", headerName: "Утас", flex: 1 },
    { field: "plan", headerName: "Төлөвлөгөө", flex: 1 },
    {
      field: "actions",
      headerName: "Үйлдэл",
      headerAlign: "center",
      align: "center",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <SeeMessages data={params.row} />
          <DeleteButton
            type={"messages"}
            id={params}
            onSuccess={handleRefresh}
          />
        </Box>
      ),
    },
  ];

  return (
    <PageContainer title="Messages">
      <Grid container spacing={2}>
        <Box sx={{ height: "auto", width: "100%" }}>
          <DataGrid
            rows={datas}
            columns={columns}
            getRowId={(row) => row.id}
            initialState={{
              pagination: { paginationModel: { pageSize: 15 } },
            }}
            pageSizeOptions={[15]}
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
