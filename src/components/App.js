import React, { useState } from "react";
import "../styles.css";
import { Button, CircularProgress } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store/actions";
import TableUsers from "./TableUsers";
import SearchUsers from "./SearchUsers";

export default function App() {
  const [value, setValue] = useState("");
  const [check, setCheck] = useState(false);

  const loading = useSelector((state) => state.loading);
  const users = useSelector((state) => state.list.length);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchUsers());
  };

  return (
    <div className="app">
      <Button variant="contained" color="primary" onClick={handleClick}>
        Загрузить список
      </Button>
      {loading && !users && <CircularProgress />}
      {!!users &&
        <>
          <SearchUsers setValue={setValue} setCheck={setCheck} value={value} />
          <TableUsers value={value} check={check} />
        </>
      }
    </div>
  );
}
