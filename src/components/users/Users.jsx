import "./users.scss";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useListMutation, useDeleteUserMutation } from "../../redux/services/userSlice";
import { Toaster, toast } from "react-hot-toast";
const UsersList = () => {
  
  const columns = [
    { field: "id", headerName: "ID", width: 390 },
    {
      field: "email",
      headerName: "EMAIL",
      width: 250,
      editable: true,
    },
    {
      field: "password",
      headerName: "PASSWORD",
      width: 250,
      editable: true,
    },
  ];


  const [list] = useListMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [data, setData] = useState([]);
  const [callApi, setCallApi] = useState(false);
  
  const handleDelete = async (id) =>{
    try {
      const res = await deleteUser({id}).unwrap();

      if (res.code === 200) {
        toast.success(res.message);
        setCallApi(true)
      } else {
        toast.error(res.message);
      }
    } catch (error) {
      console.log("error", error);
    }
  }
  

  useEffect(() => {
    let getData = async () => {
      try {
        const res = await list().unwrap();

        if (res.code === 200) {
          setData(res.data);
          toast.success(res.message);
        } else {
          toast.error(res.message);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    getData();
  }, [callApi]);

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
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
      Users List
        <Link to="/users/new" className="link">
          Add New User
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

      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default UsersList;
