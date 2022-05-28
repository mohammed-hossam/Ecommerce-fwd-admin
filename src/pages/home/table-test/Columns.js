import Age from './Age';
import ColFilter from './ColFilter';

const columns = [
  {
    // Column Options
    Header: 'الرقم',
    accessor: 'id', // accessor is the "key" in the data
  },
  {
    Header: 'الاسم الاول',
    accessor: 'first_name',
  },
  {
    Header: 'الاسم الثاني',
    accessor: 'last_name',
  },
  {
    Header: 'البريد الالكتروني',
    accessor: 'email',
  },
  {
    Header: 'النوع',
    accessor: 'gender',
  },
  //  {
  //    Header: 'تاريخ الميلاد',
  //    accessor: 'date_of_birth',
  //  },

  {
    Header: 'السن',
    accessor: 'age',
    disableSortBy: true,
    Cell: (props) => {
      // console.log(props);
      const x = props.rows.values.done;
      // console.log(x);
      return <Age value={props.value} admin={x} />;
    },
    disableFilters: true,
  },
  {
    Header: 'البلد',
    accessor: 'country',
    disableFilters: true,
  },
  {
    Header: 'الحالة',
    accessor: 'done',
    Cell: ({ value }) => {
      return value ? 'وصل' : 'لم يصل';
    },
    disableFilters: true,
  },
];

export default columns;
