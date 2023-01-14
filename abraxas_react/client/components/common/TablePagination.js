import React, { useState } from 'react';
import TablePagination from '@mui/material/TablePagination';

export default function TablePaginationDemo(props) {
  let data = props.data;
  let page = props.page
  let setPage = props.setPage
  let rowsPerPage = props.rowsPerPage;
  let setRowsPerPage = props.setRowsPerPage;


  const deleteActive = ()=>{
    let items = document.getElementsByClassName('package-item_active');
    Array.from(items).forEach((el)=>{
      el.classList.remove('package-item_active')
    })
  }
  

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    // deleteActive();
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    // deleteActive();
  };

  return (
    <TablePagination
      component="div"
      count={data.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
    />
  );
}
