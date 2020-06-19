import React, { ReactElement, ReactNode } from 'react';

import {
  Container,
  Avatar,
  MessageContainer,
  MessageHeader,
  MessageAuthor,
  BotIcon,
  MessageDate,
  MessageContent,
  Mention
} from './styles';

interface Props {
  avatar: string;
  author: string;
  date: string;
  content: string | ReactElement | ReactNode;
  hasMention?: boolean;
  userMention?: string;
  isBot?: boolean;
}

const ChannelMessage: React.FC<Props> = ({ avatar, author, date, content, hasMention, userMention, isBot }) => {
  return (
    <Container hasMention={hasMention} >
      <Avatar isBot={hasMention} />
      <MessageContainer>
        <MessageHeader>
          <MessageAuthor>{author}</MessageAuthor>
          { isBot && <BotIcon>BOT</BotIcon>}
          <MessageDate>{date}</MessageDate>
        </MessageHeader>
        <MessageContent>
          { hasMention && (<><Mention>@{userMention}</Mention>, </>)}
          {content}
        </MessageContent>
      </MessageContainer>
    </Container>
  );
}

export default ChannelMessage;