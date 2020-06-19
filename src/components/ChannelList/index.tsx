import React from 'react';

import { Container, Category, CategoryTitle, AddCategoryIcon } from './styles';
import ChannelButton from '../ChannelButton';

const ChannelList = () => {
  return (
    <Container>
      <Category>
        <CategoryTitle>Canais de texto</CategoryTitle>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="wow" isSelected />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="valorant" />
    </Container>
  );
}

export default ChannelList;