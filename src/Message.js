import { CardContent, Typography, Card } from "@mui/material";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef((message, ref) => {
  const isUser = message.username === message.mUsername;
  console.log(isUser);
  return (
    <div ref={ref} className={`message ${isUser && "message__user"}`}>
      <Card className={isUser ? "message__userCard" : "message__guesCard"}>
        <CardContent>
          <Typography color="black" variant="h5" component="h2">
            {!isUser && `${message.mUsername  || "UnKnown USer"} : `} {message.message}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
});

export default Message;
