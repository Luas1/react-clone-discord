import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: transparent;
  padding: 5px 3px;
  border-radius: 5px;
  transition: background-color .2s;
  cursor: pointer;

  &:hover, &:active {
    background-color: var(--quinary);
  }
`;

export const RoomInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const HashtagIcon = styled(Hashtag)`
  width: 20px;
  height: 20px;
  color: var(--symbol);
`;

export const RoomTitle = styled.span`
  font-size: 15px;
  color: var(--senary);
`;

export const RoomOptions = styled.div`
  display: flex;
  align-items: center;
`;

export const InviteIcon = styled(PersonAdd)`
  width: 16px;
  height: 16px;
  color: var(--symbol);
  transition: color .2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 16px;
  height: 16px;
  margin-left: 4px;
  color: var(--symbol);
  transition: color .2s;
  cursor: pointer;

  &:hover {
    color: var(--white);
  }
`;