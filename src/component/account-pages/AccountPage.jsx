import React, { useState, useEffect } from "react";
import PostService from "service/postService";
import AuthService from "service/authService";
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
  const [privatePage, setPrivatePageTwo] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    PostService.getAccountPage()
    .then((response) => {
        setPrivatePageTwo(response.data);
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
  return (
    <div>
      AccountPage
      <br />
      {privatePage.map(info => <p>{info.data}</p>)}

    </div>
  )
}

export default AccountPage