import { createContext, useState } from "react";


export const ProfileContext = createContext();


export function ProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    id: 1,
    username: "goms-io",
    userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
    followers: []
  });

 
  const followUser = (user) => {
    setProfile(prev => ({
      ...prev,
      followers: [...prev.followers, user]
    }));
  };


  const unfollowUser = (user) => {
    setProfile(prev => ({
      ...prev,
      followers: prev.followers.filter(f => f.id !== user.id)
    }));
  };

  return (
    <ProfileContext.Provider value={{ profile, followUser, unfollowUser }}>
      {children}
    </ProfileContext.Provider>
  );
}
