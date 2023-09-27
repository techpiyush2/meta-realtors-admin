import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useEffect, useState } from "react";
import {
  useCreatePropertyMutation,
} from "../../redux/services/propertySlice";
import { Toaster, toast } from "react-hot-toast";
import environment from "../../redux/environment";
import axios from "axios";
import Select from "react-select";
import { useSelector } from "react-redux";

const NewUser = () => {
  const [createProperty] = useCreatePropertyMutation();
  const [image, setImage] = useState("");
  const [type, setType] = useState();
  const [havePark, setHavePark] = useState();
  const [haveParking, setHaveParking] = useState();
  const [selectedValue, setSelectedValue] = useState([]);
  const [filesUploads, setFilesUploads] = useState([])
  const [filesUploadsProgress, setFilesUploadsProgress] = useState(0)
  const [getFiles, setGetFiles] = useState([])
  
  const userId = useSelector((state) => state.auth.userId);
  
  
  let [form,setForm] = useState({
     title: "",
    createdby_id: "",
     description: "",
    images: "",
     type: "",
    bedrooms: "",
    bathrooms: "",
    size: "",
    price: "",
    parking: "",
    parkOrGarden: "",
    features: [],
    address: "",
    contactNo: "",
    ownerName: "",
  })
 
  
  const update = event => {
    const target = event.currentTarget

    setForm({
        ...form,
        [target.name]: target.type === 'checkbox'
            ? target.checked
            : target.value
    })
}
  
  const options = [
    { value: "VILLA", label: "VILLA" },
    { value: "FLAT", label: "FLAT" },
    { value: "KOTHI", label: "KOTHI" },
    { value: "PLOT", label: "PLOT" },
    { value: "COMMERCIAL", label: "COMMERCIAL" },
  ];
  
  const options2 = [
    { value: true, label: "Available" },
    { value: false, label: "Not Available" },
  ];
  const options3 = [
    { value: "Parking", label: "Parking" },
    { value: "Waterfront", label: "Waterfront" },
    { value: "Landscaping", label: "Landscaping" },
    { value: "Views", label: "Views" },
    { value: "Appliances", label: "Appliances" },
    { value: "Historic", label: "Historic" },
    { value: "Energy", label: "Energy" },
    { value: "Construction", label: "Construction" },
    { value: "Finishes", label: "Finishes" },
    { value: "Storage", label: "Storage" },
    { value: "Pool", label: "Pool" },
    { value: "Furnished", label: "Furnished" },
    { value: "Tenancy", label: "Tenancy" },
    { value: "Exclusive", label: "Exclusive" },
  ];

  const submit = async (event) => {
   
    event.preventDefault()
    console.log(image);
    form = {...form,
      Features : selectedValue,
      parking : haveParking,
      parkOrGarden : havePark,
      createdby_id : userId,
      type : type,
      images :  image
    }
    console.log(form);

    try {
      const res = await createProperty(form).unwrap();
      if(res.code===200){
        
        toast.success(res.message)
   
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
  
  useEffect(()=>{
    imageUpload()
  },[filesUploads])
  
  
  const imageUpload = () => {
       const formData = new FormData()
       
       if(filesUploads.length == 1){
        toast.error('Please select at least Two Images')
       }
  
      for(let i = 0; i < filesUploads.length; i++){
        formData.append('file', filesUploads[i])
      }
    
    axios
      .post(environment.baseUrl + "api/v1/property/uploadImage", formData)
      .then((res) => {
 
        if (res.data.code === 200) {
          toast.success(res.data.message);
          setImage(res.data.data)
        } else {
          toast.error(res.data.message);
        }
        if (!res) {
          throw new Error("Data Fetch Failed!");
        }
      });
  };
  
  const featureHandler = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map(x => x.value) : []);
  }
  
  return (
    <div className="new my-16 ">
      <div className="newContainer">
        <div className="top">
          <h1>Add New Property</h1>
        </div>
        <div className="bottom">
          <div className="left">
          <img
              src={
                image
                  ? environment.baseUrl+ 'upload/properties/'+ image[0]
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={submit}>
            
            <div className="formInput focus:border:blue">
              <label htmlFor="file-image">
                Image: <DriveFolderUploadOutlinedIcon className="icon" />
              </label>
              <input
                type="file"
                id="file-image"
                multiple
                accept="image/*"
                onChange={(e)=>setFilesUploads(e.target.files)}
                style={{ display: "none" }}
              />
            </div>

              <div className="formInput focus:border:blue" key={1}>
                <label>Title</label>
                <input type="text" name="title" placeholder="title"  onChange={update} />
              </div>

              <div className="formInput focus:border:blue" key={2}>
                <label>Description</label>
                <input type="text" name="description" placeholder="description"  onChange={update} />
              </div>

              <div className="formInput focus:border:blue" key={3}>
                <label>Type</label>
                <Select
                  options={options}
                  name="type"
                  onChange={(data) => {
                    setType(data.value);
                  }}
                />
              </div>
              <div className="formInput focus:border:blue" key={4}>
                <label>Address</label>
                <input type="text" name="address" placeholder="address"   onChange={update}/>
              </div>
              <div className="formInput focus:border:blue" key={5}>
                <label>Contact No</label>
                <input
                  type="number"
                  placeholder="contact no"
                  name="contactNo"
                  onChange={update}
                />
              </div>
              <div className="formInput focus:border:blue" key={6}>
                <label>Size</label>
                <input type="number" name="size" placeholder="size"  onChange={update}/>
              </div>
              <div className="formInput focus:border:blue" key={7}>
                <label>Bedrooms</label>
                <input type="number" name="bedrooms" placeholder="bedrooms"  onChange={update}/>
              </div>
              <div className="formInput focus:border:blue" key={8}>
                <label>Bathrooms</label>
                <input type="number" name="bathrooms" placeholder="bathrooms"  onChange={update}/>
              </div>
              <div className="formInput focus:border:blue" key={9}>
                <label>Price</label>
                <input type="number" name="price" placeholder="price"  onChange={update} />
              </div>
              <div className="formInput focus:border:blue" key={10}>
                <label>Owner Name</label>
                <input type="text" name="ownerName" placeholder="owner name"  onChange={update}/>
              </div>
              <div className="formInput focus:border:blue" key={11}>
                <label>Features</label>
                <Select
                  options={options3}
                  isMulti
                  value={options3.filter(obj => selectedValue.includes(obj.value))} 
                  classNamePrefix="select"
                  onChange={featureHandler}
                  isClearable
                />
              </div>
              <div className="formInput focus:border:blue " key={12}>
                <label>Parking</label>
                <Select
                  options={options2}
                  onChange={(data) => {
                    setHaveParking(data.value);
                  }}
                />
              </div>
              <div className="formInput focus:border:blue" key={13}>
                <label>Park or Garden</label>
                <Select
                  options={options2}
                  onChange={(data) => {
                  setHavePark(data.value);
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