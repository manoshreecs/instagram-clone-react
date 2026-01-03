import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Stories() {
  const [stories, setStories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/story")
      .then(res => res.json())
      .then(data => setStories(data));
  }, []);

  return (
    <div className="d-flex gap-3 p-3" style={{ overflowX: "auto" }}>
      {stories.map(story => (
        <div
          key={story.id}
          className="text-center"
          style={{ cursor: "pointer", width: "70px" }}
          onClick={() => navigate(`/story/${story.id}/${stories.length}`)}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "2px solid red",
              borderRadius: "50%",
              padding: "2px",
              margin: "auto"
            }}
          >
            <img
              src={story.userAvatar}
              alt={story.username}
              className="rounded-circle"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
            />
          </div>
          <small className="d-block text-truncate">
            {story.username}
          </small>
        </div>
      ))}
    </div>
  );
}

export default Stories;
