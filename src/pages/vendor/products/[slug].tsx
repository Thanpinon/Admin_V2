import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";
import * as yup from "yup";
import axios from "axios";
import { Formik } from "formik";
import Box from "@component/Box";
import Card from "@component/Card";
import Select from "@component/Select";
import Grid from "@component/grid/Grid";
import DropZone from "@component/DropZone";
import TextArea from "@component/textarea";
import { Button } from "@component/buttons";
import TextField from "@component/text-field";
import VendorDashboardLayout from "@component/layout/vendor-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import Product from "@models/product.model";
import { H3 } from "@component/Typography";
import { theme } from "@utils/theme";
import FlexBox from "@component/FlexBox";
import Image from "@component/Image";

const UploadImageBox = styled(Box)({
  width: 70,
  height: 70,
  display: "flex",
  overflow: "hidden",
  borderRadius: "8px",
  position: "relative",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.colors.primary[100],
});

const categoryOptions = [
  { label: "Fashion", value: "fashion" },
  { label: "Gadget", value: "gadget" },
];

const ProductDetails = () => {
  const { query } = useRouter();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<Product>(null);
  const slug = query.slug as string;

  const getProduct = async () => {
    setLoading(true);
    const { data } = await axios.get("/api/products/slug", { params: { slug } });
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    getProduct();
  }, [slug]);

  const initialValues = {
    name: product?.title || "",
    price: product?.price || "",
    tags: "",
    stock: "",
    sale_price: "",
    description: "",
    category: categoryOptions,
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("required"),
    category: yup.string().required("required"),
    description: yup.string().required("required"),
    stock: yup.number().required("required"),
    price: yup.number().required("required"),
    sale_price: yup.number().required("required"),
    tags: yup.object().required("required"),
  });

  const handleFormSubmit = async (values: typeof initialValues) => {
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
      <DashboardPageHeader title="Edit Product" iconName="delivery-box" button={HEADER_LINK} />

      {loading && <H3>Loading...</H3>}

      {product && (
        <Card p="30px">
          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({
              values,
              errors,
              touched,
              handleBlur,
              handleChange,
              handleSubmit,
              setFieldValue,
            }) => (
              <form onSubmit={handleSubmit}>
                <Grid container spacing={6}>
                  <Grid item sm={6} xs={12}>
                    <TextField
                      fullwidth
                      name="name"
                      label="Name"
                      placeholder="Name"
                      value={values.name}
                      onBlur={handleBlur}
                      onChange={handleChange}
                      errorText={touched.name && errors.name}
                    />
                  </Grid>

                  <Grid item sm={6} xs={12}>
                    <Select
                      isMulti
                      label="Caterogy"
                      value={values.category}
                      options={categoryOptions}
                      placeholder="Select category"
                      onChange={(value) => setFieldValue("category", value)}
                      errorText={touched.category && errors.category}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <DropZone onChange={(files) => console.log(files)} />

                    <FlexBox flexDirection="row" mt={2} flexWrap="wrap">
                      {product.images.map((item, i) => (
                        <UploadImageBox key={i} mr=".5rem">
                          <Image src={item} width="100%" />
                        </UploadImageBox>
                      ))}
                    </FlexBox>
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
                      value={values.tags}
                      onBlur={handleBlur}
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
      )}
    </Fragment>
  );
};

ProductDetails.layout = VendorDashboardLayout;

export default ProductDetails;
