import { FC } from "react";
import Box from "@component/Box";
import Card from "@component/Card";
import Modal from "@component/Modal";
import Icon from "@component/icon/Icon";
import Coupon from "@component/products/Coupon";
import Grid from "@component/grid/Grid";
import { H1 } from "@component/Typography";
import styles from "./ModalCoupon.module.css"; // Import the CSS module

// ===================================================
type Props = {
  open: boolean;
  onClose: () => void;
};
// ===================================================

const ModalCoupon: FC<Props> = (props) => {
  const { open, onClose } = props;

  return (
    <div
      className={`${styles["modal-container"]} ${
        open ? styles["modal-open"] : ""
      }`}
      onClick={onClose}
    >
      <Modal open={open} onClose={onClose}>
        <Card p="1rem" position="relative" maxWidth="1000px" width="100%">
          <Box mb="2rem">
            <H1>คูปองส่วนลด</H1>
          </Box>
          <Grid container justifyContent="center" spacing={16}>
            <Grid item md={12} xs={12} alignItems="center">
              <Grid container spacing={3}>
                <Grid item md={4} xs={4}>
                  <Coupon
                    topic="TEST"
                    description="TEST"
                    dateExpired="2023-07-29 18:46:56"
                    checked={true}
                  />
                </Grid>
                <Grid item md={4} xs={4}>
                  <Coupon
                    topic="TEST"
                    description="TEST"
                    dateExpired="2023-07-29 18:46:56"
                    checked={true}
                  />
                </Grid>
                <Grid item md={4} xs={4}>
                  <Coupon
                    topic="TEST"
                    description="TEST"
                    dateExpired="2023-07-29 18:46:56"
                    checked={true}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Box
            position="absolute"
            top="0.75rem"
            right="0.75rem"
            cursor="pointer"
          >
            <Icon
              className="close"
              color="primary"
              variant="small"
              onClick={onClose}
            >
              close
            </Icon>
          </Box>
        </Card>
      </Modal>
    </div>
  );
};

export default ModalCoupon;
