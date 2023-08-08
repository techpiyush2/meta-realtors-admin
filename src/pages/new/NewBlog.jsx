import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useRef, useEffect } from "react";
import Select from "react-select";
import {
  useBlogCreateMutation,
} from "../../redux/services/blogSlice";
import { Toaster, toast } from "react-hot-toast";
import environment from "../../redux/environment";
import axios from "axios";

const NewUser = () => {
 
  const [blogCreate] = useBlogCreateMutation();
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [type, setType] = useState({});
  let titleRef = useRef();
  let descriptionRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log(image);

    let  FormData = {
      image : imageData,
      type : type,
      title : titleRef.current.value,
      description : descriptionRef.current.value
      
    }
    console.log(FormData);

    try {
      const res = await blogCreate(FormData).unwrap();
      if(res.code===200){
        toast.success(res.message)
       titleRef.current.value = ""
     descriptionRef.current.value = ""
      }else{
        toast.error(res.message)

      }
      if (!res) {
        throw new Error("Data Fetch Failed!");
      }

    } catch (error) {
      console.log('error',error);
      toast.error('Network Error')

    }
  };


  const imageUpload = (e) => {
    const fd = new FormData();
    fd.append("file",e);
    fd.append("type", "BLOG");
    axios
      .post(environment.baseUrl + "api/v1/blog/uploadImage", fd)
      .then((res) => {
        console.log(res);
        if (res.data.code === 200) {
          toast.success(res.data.message);
          setImage(res.data.data.imagePath)
          setImageData(res.data.data.imagePath)
        } else {
          toast.error(res.data.message);
        }
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
      });
  };

  const options = [
    { value: "VILLA", label: "VILLA" },
    { value: "FLAT", label: "FLAT" },
    { value: "KOTHI", label: "KOTHI" },
    { value: "PLOT", label: "PLOT" },
  ];

  return (
    <div className="new my-16">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Blog</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                image
                  ? environment.baseUrl+ 'upload/blogs/'+ image
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
          <form onSubmit={handleSubmit}>
            
            <div className="formInput focus:border:blue">
              <label htmlFor="file-image">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file-image"
                accept="image/*"
                onChange={(e) => imageUpload(e.target.files[0])}
                style={{ display: "none" }}
              />
            </div>

              <div className="formInput focus:border:blue" key={1}>
                <label>Title</label>
                <input type="text" placeholder="title" ref={titleRef} />
              </div>

              <div className="formInput focus:border:blue" key={2}>
                <label>Description</label>
                <input
                  type="text"
                  placeholder="description"
                  ref={descriptionRef}
                />
              </div>

              <div className="formInput focus:border:blue" key={3}>
                <label>Blog Type</label>
                <Select
                  options={options}
                  onChange={(data) => {
                    setType(data.value);
                  }}
                />
              </div>

              <button>Add</button>
            </form>
          </div>
        </div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default NewUser;
