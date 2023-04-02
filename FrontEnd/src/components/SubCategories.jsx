import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} size="small" aria-label="a dense table">
        <TableHead></TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
            <TableCell>
              <Button>Lorem, ipsum dolor.</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
