import React from "react";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import moment from "moment";

const TableUsers = ({ value, check }) => {
  const users = useSelector((state) => {
    if (value && check) {
      return state.list.filter(
        (item) =>
          item.first_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          (item.last_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
            item.is_active === true)
      );
    }
    if (value) {
      return state.list.filter(
        (item) =>
          item.first_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
          item.last_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
      );
    }
    if (check) {
      return state.list.filter((item) => item.is_active === true);
    }
    return state.list;
  });

  return (
    <TableContainer component={Paper} style={{ width: 500 }}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>ФИО</TableCell>
            <TableCell align="left">дата</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {value && !users.length ? (
            <TableRow>
              <TableCell style={{ textAlign: "center" }} colSpan={2}>
                "Ничего не найдено"
              </TableCell>
            </TableRow>
          ) : (
            <>
              {users.map((item) => (
                <TableRow key={item.id}>
                  <TableCell
                    align="left"
                    style={item.is_active ? { color: "green" } : null}
                  >
                    {item.first_name} {item.last_name}
                  </TableCell>
                  <TableCell align="left">
                    {moment(item.created_at).format("YY.MM.DD , HH:mm")}
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableUsers;
