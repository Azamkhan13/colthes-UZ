// import * as React from 'react';
// import { DataGrid, GridColDef } from '@mui/x-data-grid';
// import useWorkerstore from '../../store';
// import { useStore } from 'zustand';
// import EditModal from './editButton';

// export default function DataTable() {
//   const { data, getWorkers, deleteWorks}: any = useStore(useWorkerstore);

//   const columns: GridColDef[] = [
//     { field: 'id', headerName: 'ID', width: 70 },
//     { field: 'first_name', headerName: 'First name',  width: 130 },
//     { field: 'last_name', headerName: 'Last name', width: 130 },
//     { field: 'age', headerName: 'Age', type: 'number', width: 90 },
//     { field: 'phone_number', headerName: 'Phone_number', type: 'number', width: 90 },
//     { field: 'password', headerName: 'password', type: 'number', width: 90 },
//     { field: 'edit', headerName: 'Action', sortable: false, width: 270,
//       renderCell: (params) => (
//         <div className=' flex gap-[6px]'>
//           <EditModal/>
//           <button onClick={() => handleDelete(params.row.id)}><i className='bx bx-message-alt-x text-[25px] text-white'></i></button>
//         </div>
//       ),
//     },
//   ];

//   async function getData() {
//     const payload = {
//       page: 1,
//       limit: 1000,
//     };
//     await getWorkers(payload);
//   }

//   const handleDelete = async (id: string) => {
//     console.log(id);
    
//     await deleteWorks(id);
//   }
  

//   React.useEffect(() => {
//     getData();
//   }, []);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         pageSize={5}
//         checkboxSelection
//         disableSelectionOnClick
//       />
//     </div>
//   );
// }
