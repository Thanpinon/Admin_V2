import { cloneElement, FC, Fragment, ReactElement, useState } from "react";
import Modal from "../Modal";

// ============================================================
type Props = { handle: ReactElement; children: ReactElement };
// ============================================================

const LoginDialog: FC<Props> = ({ handle, children }) => {
  const [open, setOpen] = useState(false);

  const toggleDialog = () => setOpen(!open);

  return (
    <Fragment>
      {cloneElement(handle, { onClick: toggleDialog })}

      <Modal open={open} onClose={toggleDialog}>
        {children}
      </Modal>
    </Fragment>
  );
};

export default LoginDialog;
