import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "./ProfileContext";

function Profile() {
  const { profile, unfollowUser } = useContext(ProfileContext);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    if (profile) {
      setFollowers(profile.followers); 
  }, [profile]);

  if (!profile) return <p>Loading...</p>;

  const handleUnfollow = (userId) => {
    unfollowUser(userId);
    setFollowers(prev => prev.filter(f => f.id !== userId)); 
  };

  return (
    <div className="m-4">
      <img src={profile.userAvatar} width="80" className="rounded-circle" />
      <h4>{profile.username}</h4>

      <h6 className="mt-3">
        Followers ({followers.length})
      </h6>

      {followers.map(user => (
        <div key={user.id} className="d-flex align-items-center my-2">
          <img src={user.userAvatar} width="40" className="rounded-circle" />
          <span className="ms-2">{user.username}</span>
          <button
            className="btn btn-outline-danger btn-sm ms-auto"
            onClick={() => handleUnfollow(user.id)}
          >
            Unfollow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Profile;