import Talk from 'talkjs';
import React, { useState, useEffect, useContext, useRef } from "react";

export function MyChatComponent(props) {
  const chatboxEl = useRef();

  // wait for TalkJS to load
  const [talkLoaded, markTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true));

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: '1',
        name: sessionStorage.getItem("firstName"),
        email: sessionStorage.getItem("email"),
        role: 'default',
      });

      const otherUser = new Talk.User({
        id: '2',
        name: 'Abraham',
        role: 'default',
      });

      const three = new Talk.User({
        id: '3',
        name: 'Sarah',
        role: 'default',
      });

      const four = new Talk.User({
        id: '4',
        name: 'Brianna',
        role: 'default',
      })

      const session = new Talk.Session({
        appId: 'tpuOqnWL',
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, props.user2);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox();
      chatbox.select(conversation);
      chatbox.mount(chatboxEl.current);

      return () => session.destroy();
    }
  }, [talkLoaded]);

  return <div ref={chatboxEl} style={{height: "500px"}}/>;
}