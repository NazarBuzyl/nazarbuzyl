import React,{ useState } from 'react';
import PackageCardInfo from './PackageCardInfo';
import TablePaginationDemo from './TablePagination';

export default function (props) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  let data = props.data;

  return (
    <div className="package-sector">
      {
        data.slice(page*rowsPerPage, (page+1)*rowsPerPage).map((item, key) => {
          return <PackageCardInfo
          key={key}
          data={item}/>
        })
      }
      {data.length>10 &&
        <TablePaginationDemo {...props}
        page={page}
        setPage={setPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}/>
      }
    </div>
  )
}
