import './App.css';
import Main from "./pages/Main";
import {Route, Routes} from "react-router";
import PostForm from "./pages/PostForum";

function App() {
  return (
      <Routes>
          <Route index element={<Main />} />
          <Route path={"/create"} element={<PostForm />} />
      </Routes>
  );
}

export default App;
