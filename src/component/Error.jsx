import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "fit-content",
  border: "1px sold red",
  p: 4,
};

export default function Error() {
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div>
      <Modal
        open={true}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-3">
            <div className="text-white">Something went wrong</div>
            <Button onClick={reloadPage} variant="outlined" color="error">
              Reload
            </Button>
          </div>{" "}
        </Box>
      </Modal>
    </div>
  );
}
