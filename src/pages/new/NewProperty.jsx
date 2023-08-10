import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState,useRef } from "react";
import {
  useCreatePropertyMutation,
} from "../../redux/services/propertySlice";
import { Toaster, toast } from "react-hot-toast";
import environment from "../../redux/environment";
import axios from "axios";
import Select from "react-select";


const NewUser = () => {
  const [createProperty] = useCreatePropertyMutation();
  const [image, setImage] = useState("");
  const [imageData, setImageData] = useState("");
  const [type, setType] = useState({});
  let titleRef = useRef();
  let descriptionRef = useRef();
  
  
  const options = [
    { value: "VILLA", label: "VILLA" },
    { value: "FLAT", label: "FLAT" },
    { value: "KOTHI", label: "KOTHI" },
    { value: "PLOT", label: "PLOT" },
  ];
  
  
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
      const res = await createProperty(FormData).unwrap();
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
            <form>
            
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
                <input type="text" placeholder="title" />
              </div>

              <div className="formInput focus:border:blue" key={2}>
                <label>Description</label>
                <input type="text" placeholder="description" />
              </div>

              <div className="formInput focus:border:blue" key={3}>
                <label>Type</label>
                <Select
                  options={options}
                  onChange={(data) => {
                    setType(data.value);
                  }}
                />
              </div>
              <div className="formInput focus:border:blue" key={4}>
                <label>Address</label>
                <input type="text" placeholder="address" />
              </div>
              <div className="formInput focus:border:blue" key={5}>
                <label>Contact No</label>
                <input
                  type="number"
                  placeholder="contact no"
                />
              </div>
              <div className="formInput focus:border:blue" key={6}>
                <label>Size</label>
                <input type="number" placeholder="size"/>
              </div>
              <div className="formInput focus:border:blue" key={7}>
                <label>Bedrooms</label>
                <input type="number" placeholder="bedrooms"/>
              </div>
              <div className="formInput focus:border:blue" key={8}>
                <label>Bathrooms</label>
                <input type="number" placeholder="bathrooms"/>
              </div>
              <div className="formInput focus:border:blue" key={9}>
                <label>Price</label>
                <input type="number" placeholder="price"/>
              </div>
              <div className="formInput focus:border:blue" key={10}>
                <label>Owner Name</label>
                <input type="number" placeholder="owner name"/>
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
