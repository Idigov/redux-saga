import React from "react";
import { Button, Checkbox, InputBase, Paper } from "@material-ui/core";

const SearchUsers = ({ setValue, setCheck, value }) => {
  const handleChangeInput = (e) => {
    setValue(e.target.value);
  };

  const handleChangeCheckBox = (e) => {
    setCheck(e.target.checked);
  };

  const handleRemoveValue = () => {
    setValue("");
  };

  return (
    <>
      <div>
        Показать только активных
        <Checkbox onChange={handleChangeCheckBox} />
      </div>
      <Paper
        component="form"
        style={{
          width: 490,
          paddingLeft: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <InputBase
          placeholder="Поиск"
          onChange={handleChangeInput}
          value={value}
        />
        {value ? <Button onClick={handleRemoveValue}>Сбросить</Button> : null}
      </Paper>
    </>
  );
};

export default SearchUsers;
