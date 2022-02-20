export const selectUsers = (value, check, listUsers) => {
  if (value && check) {
    return listUsers.filter(
      (item) =>
        item.first_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        (item.last_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 &&
          item.is_active === true)
    );
  }
  if (value) {
    return listUsers.filter(
      (item) =>
        item.first_name.toLowerCase().indexOf(value.toLowerCase()) !== -1 ||
        item.last_name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    );
  }
  if (check) {
    return listUsers.filter((item) => item.is_active === true);
  }
  return listUsers;
};
