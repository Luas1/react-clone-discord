import React, { useRef, useEffect } from 'react';

import {
  Container,
  MessagesList,
  MessageBox,
  InputMessageIcon,
  InputMessage,
  SendMessageButton,
  SendMessageIcon
} from './styles';
import ChannelMessage from '../ChannelMessage';

const ChannelMessages: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;
    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <MessagesList ref={messagesRef}>
        {Array.from(Array(15).keys()).map((item) => (
          <ChannelMessage 
            avatar=""
            author="Kusther"
            date="23/10/2020"
            content="Hoje é meu aniversário"
          />
        ))}
        <ChannelMessage
          avatar=""
          author="Kusther BOT"
          date="23/10/2020"
          content={
            <>
              Parabéns, Felicidades! Muitos anos de vida.
            </>
          }
          userMention="Kusther"
          hasMention
          isBot
        />
      </MessagesList>
      <MessageBox>
        <InputMessage type="text" placeholder="Conversar em #chat-livre" />
        <InputMessageIcon />
        <SendMessageButton>
          <SendMessageIcon />
        </SendMessageButton>
      </MessageBox>
    </Container>
  );
}

export default ChannelMessages