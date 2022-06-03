import './App.css';
import Main from "./pages/Main";
import {Route, Routes} from "react-router";
import PostForm from "./pages/PostForum";
import Comments from "./pages/Comments";

function App() {
  return (
      <Routes>
          <Route index element={<Main />} />
          <Route path={"/create"} element={<PostForm />} />
          <Route exact path={"/comments/:id"} element={<Comments />}/>
      </Routes>
  );
}

export default App;
