import React from 'react';

import {
  Container,
  HashtagIcon,
  ChannelTitle,
  Separator,
  Description
} from './styles';

const ChannelInfo = () => {
  return (
    <Container>
      <HashtagIcon />
      <ChannelTitle>chat-livre</ChannelTitle>
      <Separator />
      <Description>Canal aberto para conversas</Description>
    </Container>
  );
}

export default ChannelInfo;