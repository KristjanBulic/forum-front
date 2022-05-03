import axios from "axios";
import {useEffect, useState} from "react";

const PostContainer = () => {

    const [data, setData] = useState([])

    const getPosts = async () => {
        const posts = await axios.get(process.env.API + "/posts").then(res => res.data)
        setData(posts)
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className={"has-background-dark"}>
            {data.map(x => {
                return (
                    <div className={"card has-background-grey-light mb-6 pb-2 pt-5 pl-3"}>
                        <div className={"card-header"}>
                            <p className={"title is-4"}>{x.title}</p>
                        </div>
                        <div className={"card-content"}>
                            <p className={"has-text-left"}>{x.text}</p>
                        </div>
                        <div className={"card-footer"}>
                            <button className={"button is-dark"}>Comments</button>
                        </div>
                    </div>);
            })}
        </div>
    )
}

export default PostContainer;