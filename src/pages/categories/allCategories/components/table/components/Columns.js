import ToggleButton from '../../toggleButton/ToggleButton';
const columns = [
  {
    // Column Options
    Header: 'Id',
    accessor: '_id', // accessor is the "key" in the data
  },
  {
    Header: 'Name',
    accessor: 'name',
  },
  {
    Header: 'Status',
    accessor: 'status',
    Cell: (props) => {
      console.log(props);
      return <ToggleButton row={props.row.values} />;
    },
  },

  // {
  //   Header: 'Description',
  //   accessor: 'description',
  //   Cell: (props) => {
  //     // console.log(props);
  //     return <Description value={props.value} />;
  //   },
  // },

  //  {
  //    Header: 'تاريخ الميلاد',
  //    accessor: 'date_of_birth',
  //  },

  // {
  //   Header: 'السن',
  //   accessor: 'age',
  //   disableSortBy: true,
  //   Cell: (props) => {
  //     // console.log(props);
  //     const x = props.rows.values.done;
  //     // console.log(x);
  //     return <Age value={props.value} admin={x} />;
  //   },
  //   // disableFilters: true,
  // },

  // {
  //   Header: 'الحالة',
  //   accessor: 'done',
  //   Cell: ({ value }) => {
  //     return value ? 'وصل' : 'لم يصل';
  //   },
  //   // disableFilters: true,
  // },
];

export default columns;
