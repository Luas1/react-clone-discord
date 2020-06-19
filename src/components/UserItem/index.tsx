import React from 'react';

import { Container, Avatar, Nickname, BotIcon } from './styles';

interface Props {
  nickname: string;
  isBot?: boolean;
}

const UserItem: React.FC<Props> = ({ nickname, isBot }) => {
  return (
    <Container>
      <Avatar className={isBot ? 'Aenabe' : ''} />
      <Nickname>{nickname}</Nickname>
      { isBot && <BotIcon>BOT</BotIcon> }
    </Container>
  );
}

export default UserItem;