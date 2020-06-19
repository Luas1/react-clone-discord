import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: transparent;
  margin-top: 5px;
  padding: 5px;
  border-radius: 4px;
  transition: background-color .2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, .1); 
  }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background-color: var(--primary);
  border-radius: 50%;

  &.Aenabe {
    background-color: var(--my-avatar);
  }
`;

export const Nickname = styled.div`
  margin-left: 13px;
  font-weight: 500;
  color: var(--white);
  opacity: .7;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const BotIcon = styled.span`
  margin-left: 9px;
  background-color: var(--my-avatar);
  color: var(--white);
  padding: 4px 5px;
  border-radius: 4px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
`;