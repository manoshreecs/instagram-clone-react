import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function Viewstory() {
    const { id, tot } = useParams();
    const [story, setStory] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {

        fetch(`http://localhost:3000/story/${id}`)
            .then((res) => {
                if (!res.ok) throw new Error("Story not found");
                return res.json();
            })
            .then((data) => setStory(data))
            .catch(() => navigate("/"));
    }, [id, navigate]);

    useEffect(() => {

        if (+id > +tot || +id <= 0) {
            navigate("/");
        }
    }, [id, tot, navigate]);

    if (!story) return <p > Loading... < /p>;

    return ( <
        div className = "d-flex justify-content-center align-items-center vh-100 position-relative" >

        {+id > 1 && ( <
                Link to = { `/story/${+id - 1}/${tot}` }
                className = "position-absolute start-0 ms-3 fs-2 text-decoration-none text-dark" >
                ◀
                <
                /Link>
            )
        }


        <
        img src = { story.image }
        alt = "story"
        style = {
            { height: "100%", objectFit: "cover" } }
        onError = {
            (e) => (e.target.src = "/default-story.png") }
        />


        {
            +id < +tot && ( <
                Link to = { `/story/${+id + 1}/${tot}` }
                className = "position-absolute end-0 me-3 fs-2 text-decoration-none text-dark" >
                ▶
                <
                /Link>
            )
        } <
        /div>
    );
}

export default Viewstory;