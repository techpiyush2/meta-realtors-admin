import { Routes, Route, redirect } from 'react-router-dom';
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";

import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";

import AboutUs from "./pages/AboutUs"
import { productInputs, userInputs } from "./formSource";

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if(!isAuthenticated){
    return (
        <Routes>
       <Route path="*"  element= {<Login/>}/>
        </Routes>
    );
  }
else{
  return (
    <Layout>
      <Routes>
      <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        <Route path="/home" element={<AboutUs/>}/>
  
       

     <Route path="*"  element= {<NotFound/>}/>
      </Routes>
    </Layout>
  );
}}

export default App;
