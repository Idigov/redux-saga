import React from "react";
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
import { selectUsers } from "../store/selectors";
import { useSelector } from "react-redux";

const TableUsers = ({ value, check }) => {
  const listUsers = useSelector((state) => state.list);
  const users = selectUsers(value, check, listUsers);
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
