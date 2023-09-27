import "./properties.scss";
import { DataGrid } from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetPropertyListMutation,useDeletePropertyMutation,useChangeStatusMutation } from "../../redux/services/propertySlice";
import { Toaster, toast } from "react-hot-toast";

        
const Properties = () => {
  
  const [resData, setResData] = useState([]) 
  const [getPropertyList] = useGetPropertyListMutation()
  const [changeStatus] = useChangeStatusMutation()
  const [deleteProperty] = useDeletePropertyMutation()
  const [callApi, setCallApi] = useState(false);
  
  
  const handleDelete = async (id) =>{
    try {
      const res = await deleteProperty({id}).unwrap();

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
  
  const handleChange = async (data) =>{
    
    console.log(data);
    
    try {
      const res = await changeStatus({id : data._id, isActive : data.isActive}).unwrap();

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
  
  
  useEffect(()=>{
    let getData = async () =>{
     
      try {
        const res = await getPropertyList().unwrap();
         if(res.code === 200){
          setResData(res.data)
          
           toast.success(res.message)
         }else{
          toast.error(res.message)
         }
         
      } catch (error) {
        console.log('error',error);
      }
    }
    
    getData()
  },[callApi])

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      editable: true,
    },
    {
      field: 'description',
      headerName: 'Description',
      width: 150,
      editable: true,
    },
    {
      field: 'address',
      headerName: 'Address',
      width: 150,
      editable: true,
    },
    {
      field: 'contactNo',
      headerName: 'Contact No',
      width: 150,
      editable: true,
    },
    {
      field: 'size',
      headerName: 'Size',
      width: 150,
      editable: true,
    },{
      field: 'bedrooms',
      headerName: 'Bedrooms',
      width: 100,
      editable: true,
    },{
      field: 'bathrooms',
      headerName: 'Bathrooms',
      width: 100,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'parking',
      headerName: 'Parking',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'ownerName',
      headerName: 'Owner Name',
      type: 'number',
      width: 210,
      editable: true,
    },
  
  ];

  const actionColumn = [
    {
      field: "isActive",
      headerName: "Change",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction mx-6">
        
              {params.row.isActive ? 
            <div
              className= "cursor-pointer text-white bg-green-700 bg-blue focus:outline-none focus:ring-4 focus:ring-blue font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => handleChange(params.row)}
            >
              Active
              </div> :      <div
              className= "cursor-pointer text-white bg-green-700 bg-orange focus:outline-none focus:ring-4 focus:ring-orange font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() => handleChange(params.row)}
            >
              unactive
              </div> }
            
          </div>
        );
      },
    },
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
      Properties List
        <Link to="/properties/new" className="link">
          Add New Property
        </Link>
        <Link to="/properties/new" className="link">
          Add New Property
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={resData}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      <Toaster position="top-right" reverseOrder={false} />
      
    </div>
  );
};

export default Properties;
