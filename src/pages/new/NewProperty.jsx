import "./new.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";

const NewUser = () => {
  const [file, setFile] = useState("");

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
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput focus:border:blue">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
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
                <input type="select" placeholder="blog type" />
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


      </div>

    </div>
  );
};

export default NewUser;
