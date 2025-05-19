import { useEffect } from "react";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { Backend_Endpoint } from "@/config";

const InputSection = ({ data, section }) => {
  useEffect(() => {}, [data]);
  const formik = useFormik({
    initialValues: {
      title: section,
      entitle: data?.entitle || "",
      mntitle: data?.mntitle || "",
      ensubtitle: data?.ensubtitle || "",
      mnsubtitle: data?.mnsubtitle || "",
      image_url1: data?.image_url1 || "",
      image_url2: data?.image_url2 || "",
      image_url3: data?.image_url3 || "",
      image_url4: data?.image_url4 || "",
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      try {
        const response = fetch(`${Backend_Endpoint}/api/website`, {
          method: "PUT",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(values),
        });
        if (response) {
          alert("amjilttai soligloo");
        }
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {data?.entitle && (
        <div className="flex flex-col px-4">
          <label htmlFor="entitle">Англи гарчиг</label>
          <TextField
            id="entitle"
            name="entitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.entitle}
          />
        </div>
      )}
      {data?.mntitle && (
        <div className="flex flex-col px-4">
          <label htmlFor="mntitle">Монгол гарчиг</label>
          <TextField
            id="mntitle"
            name="mntitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mntitle}
          />
        </div>
      )}
      {data?.ensubtitle && (
        <div className="flex flex-col px-4">
          <label htmlFor="ensubtitle">Англи дэд гарчиг</label>
          <TextField
            id="ensubtitle"
            name="ensubtitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.ensubtitle}
          />
        </div>
      )}
      {data?.mnsubtitle && (
        <div className="flex flex-col px-4">
          <label htmlFor="mnsubtitle">Монгол дэд гарчиг</label>
          <TextField
            id="mnsubtitle"
            name="mnsubtitle"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.mnsubtitle}
          />
        </div>
      )}
      {data?.image_url1 && (
        <div className="flex flex-col px-4">
          <label htmlFor="image_url1">Зургийн хаяг</label>
          <TextField
            id="image_url1"
            name="image_url1"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image_url1}
          />
        </div>
      )}
      {data?.image_url2 && (
        <div className="flex flex-col px-4">
          <label htmlFor="image_url1">Зургийн хаяг 2</label>
          <TextField
            id="image_url2"
            name="image_url2"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image_url2}
          />
        </div>
      )}
      {data?.image_url3 && (
        <div className="flex flex-col px-4">
          <label htmlFor="image_url1">Зургийн хаяг 3</label>
          <TextField
            id="image_url3"
            name="image_url3"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image_url3}
          />
        </div>
      )}
      {data?.image_url4 && (
        <div className="flex flex-col px-4">
          <label htmlFor="image_url1">Зургийн хаяг 4</label>
          <TextField
            id="image_url4"
            name="image_url4"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.image_url4}
          />
        </div>
      )}

      <div className="p-4 ">
        <Button variant="outlined" type="submit" fullWidth>
          Submit
        </Button>
      </div>
    </form>
  );
};
export default InputSection;
