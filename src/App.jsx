import { Routes, Route, redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
import List from "./pages/list/UsersList";
import Single from "./pages/single/Single";
import NewUser from "./pages/new/NewUser";
import NewBlog from "./pages/new/NewBlog";
import PropertiesList from "./pages/list/PropertiesList";
import BlogList from "./pages/list/BlogsList";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Layout from "./components/Layout/Layout";
import NewProperty from "./pages/new/NewProperty";

function App() {
  
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (!isAuthenticated) {
    return (
      <Routes>
        <Route path="*" element={<Login />} />
      </Routes>
    );
  } else {
    return (
      <Layout>
        <Routes>
          <Route path="/">
            <Route index element={<List />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<NewUser />} />
            </Route>
            <Route path="properties">
              <Route index element={<PropertiesList />} />
              <Route path=":propertyId" element={<Single />} />
              <Route path="new" element={<NewProperty />} />
            </Route>
            <Route path="blogs">
              <Route index element={<BlogList />} />
              <Route path=":blogId" element={<Single />} />
              <Route path="new" element={<NewBlog />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    );
  }
}

export default App;
