import React, { useState, useEffect, useContext } from "react";
import { auth } from "../Firebase";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// Components
import Navbar from "./Navbar";

// Styles
import styles from "./Chats.module.css";

// Context
import { AuthContext } from "../Contexts/AuthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    if (!user) {
      history.push("/");
      return;
    }
    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "04c3f309-67ba-4b6c-8b00-451912742592",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "46d75734-3b6f-47c2-b0d7-4dda063d6de6",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, history]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandeler = async () => {
    await auth.signOut();
    history.push("/");
  };

  if (!user || loading) return "Loading...";

  return (
    <div className={styles.container}>
      <Navbar LogoutHandler={logoutHandeler} />

      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="04c3f309-67ba-4b6c-8b00-451912742592"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
