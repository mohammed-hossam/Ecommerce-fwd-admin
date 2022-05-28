import React, { useMemo } from 'react';
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import MOCK_DATA from '../../../utils/tables-data.json';
import columnsData from './Columns';

// ui
// import CssBaseline from '@material-ui/core/CssBaseline';
// import TablePagination from '@mui/material/TablePagination';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import GlobalFilter from './GlobalFilter';
import ColFilter from './ColFilter';

const StyledHeadTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#3d621f',
    color: theme.palette.common.white,
    border: '2px solid white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function ReactTable() {
  const columns = useMemo(() => columnsData, []);
  const data = useMemo(() => MOCK_DATA, []);
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColFilter,
    };
  }, []);
  const initialState = useMemo(() => {
    return {
      pageSize: 20,
      pageIndex: 0,
    };
  }, []);

  const {
    // Instance Properties
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    // rows,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      //table options
      columns,
      data,
      defaultColumn,
      initialState,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  return (
    <>
      <GlobalFilter
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table stickyHeader {...getTableProps()}>
        <TableHead>
          {
            // Loop over the header rows
            headerGroups.map((headerGroup) => (
              // Apply the header row props
              <TableRow {...headerGroup.getHeaderGroupProps()}>
                {
                  // Loop over the headers in each row
                  headerGroup.headers.map((column) => (
                    // Apply the header cell props

                    <StyledHeadTableCell
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {
                        // Render the header
                        column.render('Header')
                      }
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? ' 🔽'
                            : ' 🔼'
                          : ''}
                      </span>

                      <div>
                        {column.canFilter ? column.render('Filter') : null}
                      </div>
                    </StyledHeadTableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableHead>
        <TableBody {...getTableBodyProps()}>
          {
            // Loop over the table rows
            page.map((row) => {
              // Prepare the row for display
              prepareRow(row);
              return (
                // Apply the row props
                <StyledTableRow {...row.getRowProps()}>
                  {
                    // Loop over the rows cells
                    row.cells.map((cell) => {
                      // Apply the cell props
                      return (
                        <TableCell {...cell.getCellProps()}>
                          {
                            // Render the cell contents
                            cell.render('Cell')
                          }
                        </TableCell>
                      );
                    })
                  }
                </StyledTableRow>
              );
            })
          }
        </TableBody>
      </Table>
      <div className="pagination">
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {'<<'}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          {'<'}
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          {'>'}
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {'>>'}
        </button>
        <span>
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <span>
          | Go to page:
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{ width: '100px' }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ReactTable;
