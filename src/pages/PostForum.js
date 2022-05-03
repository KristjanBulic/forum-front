import {useForm} from "react-hook-form";
import axios from "axios";
import Header from "../components/Header";

const PostForm = () => {
    const {register, handleSubmit} = useForm();
    const onFormSubmit = (data) => {
      axios.post(process.env.API + "/new-post", data);
      window.location = "/";
    }

    const onError = () => {
      console.log("error posting")
    }

    return (
        <div>
            <Header />
            <form className={"p-5"} onSubmit={handleSubmit(onFormSubmit, onError)}>
                <label htmlFor={"title"} className={"label"}>Title: </label>
                <input type={"text"} placeholder={"title"} id={"title"} className={"input mb-3"}  {...register('title')}/>

                <label htmlFor={"text"} className={"label"}>Text: </label>
                <input type={"text"} placeholder={"text"} id={"text"} className={"textarea mb-3"} {...register('text')}/>
                <button className={"button is-dark"}>Submit</button>
            </form>
        </div>
    )
}

export default PostForm;