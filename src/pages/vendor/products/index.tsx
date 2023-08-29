import { Fragment, useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import Avatar from "@component/avatar";
import Hidden from "@component/hidden";
import Icon from "@component/icon/Icon";
import FlexBox from "@component/FlexBox";
import TableRow from "@component/TableRow";
import Pagination from "@component/pagination";
import { IconButton } from "@component/buttons";
import Typography, { H5 } from "@component/Typography";
import VendorDashboardLayout from "@component/layout/vendor-dashboard";
import DashboardPageHeader from "@component/layout/DashboardPageHeader";
import { Meta } from "interfaces";
import Product from "@models/product.model";
import { calculateDiscount, currency } from "@utils/utils";

const Products = () => {
  const [page, setPage] = useState(1);
  const [meta, setMeta] = useState<Meta>(null);
  const [products, setProducts] = useState<Product[]>([]);

  const getProducts = async () => {
    const { data } = await axios.get("/api/products", { params: { pageSize: 10, page } });
    setProducts(data.result);
    setMeta(data.meta);
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <Fragment>
      <DashboardPageHeader title="Products" iconName="delivery-box" />

      <Hidden down={769}>
        <TableRow padding="0px 18px" mb="-0.125rem" boxShadow="none" bg="none">
          <FlexBox my="0px" mx="6px" flex="2 2 220px !important">
            <H5 ml="56px" color="text.muted" textAlign="left">
              Name
            </H5>
          </FlexBox>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Regular price
          </H5>

          <H5 color="text.muted" my="0px" mx="6px" textAlign="left">
            Sale Price
          </H5>

          <H5 flex="0 0 0 !important" color="text.muted" px="22px" my="0px" />
        </TableRow>
      </Hidden>

      {products.map((item) => (
        <Link href={`/vendor/products/${item.slug}`} key={item.id} passHref>
          <TableRow as="a" my="1rem" padding="6px 18px">
            <FlexBox alignItems="center" m="6px" flex="2 2 220px !important">
              <Avatar src={item.thumbnail} size={36} />
              <Typography textAlign="left" ml="20px">
                {item.title}
              </Typography>
            </FlexBox>

            <H5 m="6px" textAlign="left" fontWeight="400">
              {currency(item.price)}
            </H5>

            <H5 m="6px" textAlign="left" fontWeight="400">
              {calculateDiscount(item.price, item.discount)}
            </H5>

            <Hidden flex="0 0 0 !important" down={769}>
              <Typography textAlign="center" color="text.muted">
                <IconButton size="small">
                  <Icon variant="small" defaultcolor="currentColor">
                    arrow-right
                  </Icon>
                </IconButton>
              </Typography>
            </Hidden>
          </TableRow>
        </Link>
      ))}

      <FlexBox justifyContent="center" mt="2.5rem">
        <Pagination pageCount={meta?.totalPage || 1} onChange={(data) => setPage(data + 1)} />
      </FlexBox>
    </Fragment>
  );
};

Products.layout = VendorDashboardLayout;

export default Products;
