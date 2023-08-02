import "./users.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useListMutation } from "../../redux/services/userSlice";
const UsersList = () => {
 
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 390 },
    {
      field: 'email',
      headerName: 'EMAIL',
      width: 250,
      editable: true,
    },
    {
      field: 'password',
      headerName: 'PASSWORD',
      width: 250,
      editable: true,
    },
  ];
  

  const [isFetching, setIsFetching] = useState(false)
  const [resData, setResData] = useState([]) 
  
  const [list] = useListMutation()
  
  const [data, setData] = useState([]);

  useEffect(()=>{
    let getData = async () =>{
      setIsFetching(true);
      try {
        const res = await list().unwrap();
          
        console.log(res);
        
         if(res.code === 200){
          setData(res.data)
           toast.success(res.message)
         }else{
          toast.error(res.message)
         }
         
      } catch (error) {
        console.log('error',error);
      }
      setIsFetching(false);
    }
    
    getData()
  },[])
  

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable my-20">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={data}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default UsersList;
