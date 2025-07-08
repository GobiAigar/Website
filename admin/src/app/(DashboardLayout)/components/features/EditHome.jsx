import {
  Button,
  TextField,
  Grid,
  InputLabel,
  DialogActions,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import FileUploader from "../website/FileUploader";
import { Backend_Endpoint } from "@/constants/constants";

export default function EditHome({ data, onClose, onSubmitSuccess }) {
  const formik = useFormik({
    initialValues: {
      entitle: data?.entitle || "",
      mntitle: data?.mntitle || "",
      endescription: data?.endescription || "",
      mndescription: data?.mndescription || "",
      image_url1: data?.image_url1 || "",
      image_url2: data?.image_url2 || "",
      image_url3: data?.image_url3 || "",
      image_url4: data?.image_url4 || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const response = await fetch(
          `${Backend_Endpoint}/api/website/${data.id}`,
          {
            method: "PUT",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        const updated = await response.json();

        if (onSubmitSuccess) onSubmitSuccess();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2} sx={{ margin: 2, overflow: "hidden" }}>
        <Grid size={{ xs: 6 }}>
          <InputLabel htmlFor="mntitle">Гарчиг /Монгол/</InputLabel>
          <TextField
            fullWidth
            id="mntitle"
            name="mntitle"
            onChange={formik.handleChange}
            value={formik.values.mntitle}
          />
        </Grid>
        <Grid size={{ xs: 6 }}>
          <InputLabel htmlFor="entitle">Гарчиг /Англи/</InputLabel>
          <TextField
            fullWidth
            id="entitle"
            name="entitle"
            onChange={formik.handleChange}
            value={formik.values.entitle}
          />
        </Grid>
        <Grid size={12}>
          <InputLabel htmlFor="endescription">Тайлбар /Монгол/</InputLabel>
          <TextField
            fullWidth
            id="endescription"
            name="endescription"
            multiline
            minRows={4}
            onChange={formik.handleChange}
            value={formik.values.endescription}
          />
        </Grid>
        <Grid size={12}>
          <InputLabel htmlFor="mndescription">Тайлбар /Англи/</InputLabel>
          <TextField
            fullWidth
            multiline
            minRows={4}
            id="mndescription"
            name="mndescription"
            onChange={formik.handleChange}
            value={formik.values.mndescription}
          />
        </Grid>
        {[12].includes(data.id) && (
          <Grid container size={12} spacing={2}>
            <Grid size={12} container spacing={2}>
              <Grid size={6}>
                <Typography>Англи</Typography>
                <FileUploader
                  setFieldValue={formik.setFieldValue}
                  fieldName={`image_url1`}
                  initialPreview={data?.image_url1}
                  type={"image"}
                />
              </Grid>
              <Grid size={6}>
                <Typography>Монгол</Typography>
                <FileUploader
                  setFieldValue={formik.setFieldValue}
                  fieldName={`image_url2`}
                  initialPreview={data?.image_url2}
                  type={"image"}
                />
              </Grid>
            </Grid>
          </Grid>
        )}

        {![7, 13, 12].includes(data.id) &&
          (data.id === 1
            ? [1]
            : [2, 6].includes(data.id)
            ? [1, 2, 3, 4]
            : [1]
          ).map((i) => {
            const url = formik.values[`image_url${i}`];
            const isVideo = data.id === 1;
            return (
              <Grid size={{ xs: 6 }} key={i}>
                <InputLabel htmlFor={`image_url${i}`}>
                  {isVideo ? `Видео ${i}` : `Зураг ${i}`}
                </InputLabel>
                {isVideo ? (
                  <TextField
                    fullWidth
                    id={`image_url${i}`}
                    name={`image_url${i}`}
                    multiline
                    onChange={formik.handleChange}
                    value={formik.values[`image_url${i}`]}
                  />
                ) : (
                  <FileUploader
                    setFieldValue={formik.setFieldValue}
                    fieldName={`image_url${i}`}
                    initialPreview={url}
                    type={"image"}
                  />
                )}
              </Grid>
            );
          })}
      </Grid>

      <DialogActions>
        <Button onClick={onClose} color="primary" variant="outlined">
          Буцах
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Шинэчлэх
        </Button>
      </DialogActions>
    </form>
  );
}
