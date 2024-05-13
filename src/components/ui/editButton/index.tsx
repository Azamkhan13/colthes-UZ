import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "(232, 232, 232)",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function EditModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-white" id="modal-modal-title" variant="h6" component="h2">
            Edit modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className=" flex items-center">
              <div>
                <input
                  className=" rounded-full p-[7px] border border-[white] bg-transparent text-white"
                  type="text"
                  placeholder="First_name...."
                />
                <input
                  className=" rounded-full p-[7px] border border-[white] mt-[10px] bg-transparent text-white"
                  type="text"
                  placeholder="Last_name...."
                />
              </div>
              <div>
                <input
                  className=" rounded-full p-[7px] border border-[white] bg-transparent text-white"
                  type="number"
                  placeholder="Age...."
                />
                <input
                  className=" rounded-full p-[7px] border border-[white] mt-[10px] bg-transparent text-white"
                  type="text"
                  placeholder="Full_name...."
                />
              </div>
              <div>
                <input
                  className=" rounded-full p-[7px] border border-[white] bg-transparent text-white"
                  type="password"
                  placeholder="pasword...."
                />
                <input
                  className=" rounded-full p-[7px] border border-[white] mt-[10px] bg-transparent text-white"
                  type="text"
                  placeholder="phone_number...."
                />
              </div>
            </div>
            <button className=" text-white border border-[black] rounded-full pl-[30px] pr-[30px] pt-[5px] pb-[5px] mt-[10px] active:bg-blue-400 focus:outline-none focus:ring focus:ring-white">click</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
