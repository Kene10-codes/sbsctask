import React, { useState, useEffect } from "react";
import PostService from "service/postService";
import AuthService from "service/authService";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [privatePosts, setPrivatePosts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getProfilePrivatePage().then(
      (response) => {
        setPrivatePosts(response.data);
      },
      (error) => {
        console.log("Private page", error.response);
        // Invalid token
        if (error.response && error.response.status === 403) {
          AuthService.logout();
          navigate("/login");
          window.location.reload();
        }
      }
    );
  }, []);

  console.log(privatePosts)

  return (
    <div>
      <h2>Profile Page</h2>
      <h3>{privatePosts.map(info => info.data)}</h3>
    </div>
  );
};

export default Home;