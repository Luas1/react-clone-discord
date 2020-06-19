import React from 'react';

import {
  Container,
  Profile,
  Avatar,
  UserData,
  UserName,
  UserId,
  Actions,
  MicrophoneIcon,
  HeadphoneIcon,
  SettingsIcon
} from './styles';

const UserInfo = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <UserName>Kusther</UserName>
          <UserId>#2151</UserId>
        </UserData>
      </Profile>
      <Actions>
        <MicrophoneIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Actions>
    </Container>
  );
}

export default UserInfo;