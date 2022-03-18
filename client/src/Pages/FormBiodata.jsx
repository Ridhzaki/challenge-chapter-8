import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  FormLabel,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const biodataValidationSchema = yup.object({
  userName: yup.string().min(3).required(),
  fullName: yup.string().required("lastname wajib diisi"),
  email: yup.string().required("email wajib diisi"),
});

export default function FormBiodata() {

  const formik = useFormik({
    initialValues: {
      userName: "",
      fullName: "",
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify("Selamat Bergabung!"));
    },
    validationSchema: biodataValidationSchema,
  });

  return (
    <Grid container justifyContent="center">
      <Card sx={{ width: 480 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="https://icalde.org/wp-content/uploads/2017/11/Register-now-840x416.jpg"
            alt="green iguana"
          />
        </CardActionArea>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Typography gutterBottom variant="h5" component="div"  textAlign="center">
              Please Sign Up
            </Typography>
            <Grid spacing={2} container alignItems="center" direction="column">
              <Grid item>
                <TextField
                  id="userName"
                  name="userName"
                  label="User Name"
                  variant="standard"
                  size="small"
                  type="text"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.firstName && Boolean(formik.errors.firstName)
                  }
                  helperText={
                    formik.touched.firstName && formik.errors.firstName
                  }
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  variant="standard"
                  size="small"
                  type="text"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.lastName && Boolean(formik.errors.lastName)
                  }
                  helperText={formik.touched.lastName && formik.errors.lastName}
                ></TextField>
              </Grid>
              <Grid item>
                <TextField
                  id="email"
                  name="email"
                  label="email"
                  variant="standard"
                  size="small"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                ></TextField>
              </Grid>
              <Grid item>
                <Button
                  type="submit"
                  size="small"
                  variant="outlined"
                  color="primary"
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
}
