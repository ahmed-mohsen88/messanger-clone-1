import React, { useState, useEffect } from "react";
import { FormControl, IconButton, Input, InputLabel } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Messages from "./Message";
import "firebase/firestore";
import { db } from "./firebase";
import firebase from "firebase/compat/app";
import FlipMove from "react-flip-move";
import "./app.css";
import messLogo from "./mess.png";

function App() {
  const [inputs, setinputs] = useState("");
  const [messages, setmessages] = useState([
    { user: "mohamed", message: "hello" },
    { user: "ahmed", message: "whats ap" },
  ]);
  const [username, setusername] = useState("");
  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setmessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  // canceled cause it run twice!!!
  // useEffect(() => {
  //     setusername(prompt(`please enter your user name`));
  // },[]);

  // run once
  useEffect(() => {
    console.log("First call on mount..");
    return () => setusername(prompt(`please enter your user name`));
  }, []);


  const submitHandler = (event) => {
    db.collection("messages").add({
      message: inputs,
      user: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    event.preventDefault();
    setmessages([...messages, { user: username, message: inputs }]);
    setinputs("");
  };

  return (
    <div className="app">
      <h2>WELLCOME {username} </h2>
      <img src={messLogo} alt="logo" />
      <form className="app__form" autoComplete="disabled">
        <FormControl className="app__formcontrole">
          <InputLabel> send message ... </InputLabel>
          <Input
            className="app__input"
            type="text"
            name="userinput"
            value={inputs}
            onChange={(event) => setinputs(event.target.value)}
          />
          <IconButton
            className="app__iconbutton"
            color="primary"
            variant="contained"
            type="submit"
            onClick={submitHandler}
            disabled={!inputs}
          >
            {" "}
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ message, id }) => (
          <Messages
            username={username}
            message={message.message}
            mUsername={message.user}
            key={id}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default App;
