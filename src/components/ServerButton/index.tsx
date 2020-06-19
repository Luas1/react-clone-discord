import React from 'react';

import { Button } from './styles';

import Avatar from '../../assets/avatar.svg';

export interface Props {
  isSelected?: boolean;
  isHome?: boolean;
  hasNotifications?: boolean;
  wasMentioned?: number;
}

const ServerButton: React.FC<Props> = ({ isSelected, isHome, hasNotifications, wasMentioned }) => {
  return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      wasMentioned={wasMentioned}
    >
      { isHome && <img src={Avatar} alt="avatar" /> }
    </Button>
  );
}

export default ServerButton;