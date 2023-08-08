import "./blogs.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useBlogListMutation } from "../../redux/services/blogSlice";
import { Toaster, toast } from "react-hot-toast";

const Blogs = () => {
  
  
  const [isFetching, setIsFetching] = useState(false)
  const [resData, setResData] = useState([]) 
  
  const [blogList] = useBlogListMutation()
  
  

  useEffect(()=>{
    let getData = async () =>{
      setIsFetching(true);
      try {
        const res = await blogList().unwrap();
        
      
        
         if(res.code === 200){
          setResData(res.data)
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
      field: 'image',
      headerName: 'Image',
      width: 150,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Blog Type',
      type: 'number',
      width: 150,
      editable: true,
    },
    
  ];
  

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

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
        Blogs List
        <Link to="/blogs/new" className="link">
          Add New Blog
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

export default Blogs;
