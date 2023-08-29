import { Fragment } from "react";
import Link from "next/link";
import { Formik } from "formik";
import * as yup from "yup";
import Card from "@component/Card";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import TextArea from "@component/textarea";
import DropZone from "@component/DropZone";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import VendorDashboardLayout from "@component/layout/vendor-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";

const AddProduct = () => {
  const initialValues = {
    name: "",
    tags: "",
    stock: "",
    price: "",
    category: "",
    sale_price: "",
    description: "",
  };

  const checkoutSchema = yup.object().shape({
    name: yup.string().required("required"),
    category: yup.string().required("required"),
    description: yup.string().required("required"),
    stock: yup.number().required("required"),
    price: yup.number().required("required"),
    sale_price: yup.number().required("required"),
    tags: yup.object().required("required"),
  });

  const handleFormSubmit = async (values) => {
    console.log(values);
  };

  const HEADER_LINK = (
    <Link href="/vendor/products">
      <Button color="primary" bg="primary.light" px="2rem">
        Back to Product List
      </Button>
    </Link>
  );

  return (
    <Fragment>
      <DashboardPageHeader title="Add Product" iconName="delivery-box" button={HEADER_LINK} />

      <Card p="30px">
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={initialValues}
          validationSchema={checkoutSchema}
        >
          {({ values, errors, touched, handleChange, handleBlur, handleSubmit, setFieldValue }) => (
            <form onSubmit={handleSubmit}>
              <Grid container spacing={6}>
                <Grid item sm={6} xs={12}>
                  <TextField
                    fullwidth
                    name="name"
                    label="Name"
                    placeholder="Name"
                    onBlur={handleBlur}
                    value={values.name}
                    onChange={handleChange}
                    errorText={touched.name && errors.name}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <Select
                    options={[]}
                    label="Caterogy"
                    value={values.tags}
                    placeholder="Select category"
                    errorText={touched.tags && errors.tags}
                    onChange={(country) => setFieldValue("tags", country)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <DropZone onChange={(files) => console.log(files)} />
                </Grid>

                <Grid item xs={12}>
                  <TextArea
                    rows={6}
                    fullwidth
                    name="description"
                    label="Description"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Description"
                    value={values.description}
                    errorText={touched.description && errors.description}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullwidth
                    name="stock"
                    label="Stock"
                    placeholder="Stock"
                    onBlur={handleBlur}
                    value={values.stock}
                    onChange={handleChange}
                    errorText={touched.stock && errors.stock}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullwidth
                    name="tags"
                    label="Tags"
                    placeholder="Tags"
                    onBlur={handleBlur}
                    value={values.tags}
                    onChange={handleChange}
                    errorText={touched.tags && errors.tags}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullwidth
                    name="price"
                    type="number"
                    onBlur={handleBlur}
                    value={values.price}
                    label="Regular Price"
                    onChange={handleChange}
                    placeholder="Regular Price"
                    errorText={touched.price && errors.price}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <TextField
                    fullwidth
                    type="number"
                    name="sale_price"
                    label="Sale Price"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Sale Price"
                    value={values.sale_price}
                    errorText={touched.sale_price && errors.sale_price}
                  />
                </Grid>
              </Grid>

              <Button mt="25px" variant="contained" color="primary" type="submit">
                Save product
              </Button>
            </form>
          )}
        </Formik>
      </Card>
    </Fragment>
  );
};

AddProduct.layout = VendorDashboardLayout;

export default AddProduct;
