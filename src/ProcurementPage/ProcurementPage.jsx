import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  p: 4,
};

const columns = [
  { id: "name", label: "Product Name", minWidth: 170 },
  { id: "code", label: "Quantity", minWidth: 100, align: "center" },
  {
    id: "population",
    label: "Selling Price",
    minWidth: 170,
    align: "right",
  },
  { id: "action", label: "Action", minWidth: 170, align: "right" },
];

// const columns = [
//   { id: "name", label: "Name", minWidth: 170 },
//   { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
//   {
//     id: "population",
//     label: "Population",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "size",
//     label: "Size\u00a0(km\u00b2)",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toLocaleString("en-US"),
//   },
//   {
//     id: "density",
//     label: "Density",
//     minWidth: 170,
//     align: "right",
//     format: (value) => value.toFixed(2),
//   },
// ];

const rows = [
  {
    name: "India",
    code: "IN",
    population: 1324171354,
  },
  {
    name: "China",
    code: "CN",
    population: 1403500365,
  },
  {
    name: "Italy",
    code: "IT",
    population: 60483973,
  },
  {
    name: "United States",
    code: "US",
    population: 327167434,
  },
  {
    name: "Canada",
    code: "CA",
    population: 37602103,
  },
  {
    name: "Australia",
    code: "AU",
    population: 25475400,
  },
  {
    name: "Germany",
    code: "DE",
    population: 83019200,
  },
  {
    name: "Ireland",
    code: "IE",
    population: 4857000,
  },
  {
    name: "Mexico",
    code: "MX",
    population: 126577691,
  },
  {
    name: "Japan",
    code: "JP",
    population: 126317000,
  },
  {
    name: "France",
    code: "FR",
    population: 67022000,
  },
  {
    name: "United Kingdom",
    code: "GB",
    population: 67545757,
  },
  {
    name: "Russia",
    code: "RU",
    population: 146793744,
  },
  {
    name: "Nigeria",
    code: "NG",
    population: 200962417,
  },
  {
    name: "Brazil",
    code: "BR",
    population: 210147125,
  },
];

export default function ProcurementPage() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div
      style={{
        maxWidth: "90vw",
        margin: "0 auto",
      }}
    >
      <div className="orders">
        <h1>welcome Ayotayo</h1>
        <h1
          style={{
            fontSize: "30px",
          }}
        >
          Your Orders
        </h1>
      </div>
      <div className="flex gap-5 flex-wrap border items-end p-4 min-h-[90px] bg-white">
        <div className="flex flex-wrap items-end gap-3">
          <FormControl sx={{ minWidth: 120 }} size="small">
            <InputLabel
              sx={{
                backgroundColor: "white",
              }}
              id="demo-select-small-label"
            >
              Select Batch
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>Batch A</MenuItem>
              <MenuItem value={20}>Batch B</MenuItem>
              <MenuItem value={30}>Batch C</MenuItem>
            </Select>
          </FormControl>

          <div className="flex flex-col">
            <label className="text-[12px] ml-1"> select date</label>
            <input type="date" className="border h-10 px-2" />
          </div>
        </div>
        <Button
          variant="contained"
          sx={{
            height: "40px",
            backgroundColor: "#f5b622",
          }}
        >
          Search
        </Button>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ height: "60vh" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead
              sx={{
                backgroundColor: "green",
              }}
            >
              <TableRow
                sx={{
                  backgroundColor: "green",
                }}
              >
                {columns.map((column) => (
                  <TableCell
                    sx={{
                      backgroundColor: "#f5b622",
                    }}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      {columns.map((column) => {
                        const value =
                          column.id === "action" ? (
                            <Button onClick={handleOpen}>
                              <MoreVertIcon />
                            </Button>
                          ) : (
                            row[column.id]
                          );
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex-1">
            <TextField
              id="outlined-textarea"
              label="Quantity Bought"
              placeholder="Placeholder"
              multiline
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            />
            <TextField
              id="outlined-textarea"
              label="Cost Price"
              placeholder="Placeholder"
              multiline
              sx={{
                width: "100%",
                marginBottom: "20px",
              }}
            />
          </div>

          <div className="flex justify-end">
            <Button
              variant="contained"
              sx={{
                height: "40px",
                backgroundColor: "#f5b622",
              }}
            >
              Send
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
