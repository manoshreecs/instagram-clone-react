import { useContext, useEffect, useState } from "react";
import { ProfileContext } from "./ProfileContext";

function Suggestions() {
  const { profile, followUser, unfollowUser } = useContext(ProfileContext);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/suggestions")
      .then(res => res.json())
      .then(setSuggestions);
  }, []);

  if (!profile) return null;

  return (
    <div className="m-3">
  
      <div className="d-flex align-items-center my-2">
        <img src={profile.userAvatar} width="40" className="rounded-circle" />
        <span className="ms-2 fw-bold">My Profile</span>
        <span className="ms-auto text-primary fw-semibold">Switch</span>
      </div>

      <h5 className="mt-3">Suggestions</h5>

    
      {suggestions.map(user => {
        const followed = profile.followers.some(f => f.id === user.id);
        return (
          <div key={user.id} className="d-flex align-items-center my-2">
            <img src={user.userAvatar} width="40" className="rounded-circle" />
            <span className="ms-2">{user.username}</span>
            <button
              className={`btn btn-sm ms-auto ${
                followed ? "btn-outline-danger" : "btn-outline-primary"
              }`}
              onClick={() => (followed ? unfollowUser(user) : followUser(user))}
            >
              {followed ? "Unfollow" : "Follow"}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Suggestions;