import {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import {useForm} from "react-hook-form";
import Header from "../components/Header";

const Comments = () => {

    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const {register, handleSubmit} = useForm();

    const onFormSubmit = (data) => {
        axios.post(process.env.API +"/comment/post/" + id, data);
        window.location = "/";
    }

    const onError = () => {
        console.log("error posting")
    }

    const getComments = async () => {
        const posts = await axios.get(process.env.API + "/comment/post/" + id).then(res => res.data);
        posts.sort((elem1, elem2) => {
            if (elem1.id > elem2.id) {
                return -1;
            } else if (elem1.id < elem2.id) {
                return 1;
            } else {
                return 0;
            }
        });
        setComments(posts)
    }

    useEffect(() => {
        getComments();
    }, [])

  return (
    <div>
        <Header />
        <div className={"container"}>
            <form className={"p-5 field is-grouped"} onSubmit={handleSubmit(onFormSubmit, onError)}>
                <input type={"text"} placeholder={"comment..."} id={"text"} className={"input mb-4 control is-expanded"} {...register('text')}/>
                <input type={"text"} placeholder={"user..."} id={"userName"} className={"input mb-4 control is-expanded"} {...register('userName')}/>
                <button className={"button is-dark control"}>Submit Comment</button>
            </form>

            {comments.map(x => {
                return (
                    <div className={"card has-background-grey-light mb-6 pb-2 pt-5 pl-3"}>
                        <div className={"card-header"}>
                            <p className={"has-text-left"}>{x.userName}</p>
                        </div>
                        <div className={"card-content"}>
                            <p className={"has-text-left"}>{x.text}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  );
}

export default Comments;