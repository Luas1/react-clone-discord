import React from 'react';

import { 
  Container,
  RoomInfo,
  HashtagIcon,
  RoomTitle,
  RoomOptions,
  InviteIcon,
  SettingsIcon
} from './styles';

interface Props {
  isSelected?: boolean;
  channelName: string;
}

const ChannelButton: React.FC<Props> = ({ channelName, isSelected }) => {
  return (
    <Container className={isSelected ? 'anbzEUo' : ''}>
      <RoomInfo>
        <HashtagIcon />
        <RoomTitle>{channelName}</RoomTitle>
      </RoomInfo>
      { isSelected && (
      <RoomOptions>
        <InviteIcon /> 
        <SettingsIcon />
      </RoomOptions>
      )}
    </Container>
  );
}

export default ChannelButton;