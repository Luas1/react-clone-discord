import styled from 'styled-components';

interface Props {
  hasMention?: boolean;
  isBot?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;

  padding: 4px 16px;
  margin-right: 4px;
  ${(props) => props.hasMention ? `
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  ` : `
    background-color: transparent;
  `}

  &:not(:first-child) {
    margin-top: 13px;
  }
`;

export const Avatar = styled.div<Props>`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  ${(props) => props.isBot ? `
    background-color: var(--mention-detail);
  ` : `
    background-color: var(--secondary);
  `}
  border-radius: 50%;
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
  min-height: 40px;
`;

export const MessageHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const MessageAuthor = styled.p`
  color: var(--white);
  font-size: 16px;
`;

export const BotIcon = styled.span`
  margin-left: 6px;
  background-color: var(--my-avatar);
  color: var(--white);
  padding: 4px 5px;
  border-radius: 4px;

  text-transform: uppercase;
  font-weight: bold;
  font-size: 11px;
`;

export const MessageDate = styled.time`
  margin-left: 6px;
  font-size: 13px;
  color: var(--gray);
`;

export const MessageContent = styled.div`
  color: var(--white);
`;

export const Mention = styled.span`
  color: var(--link);
  cursor: pointer;
  
  &:hover {
    text-decoration: underline;
  }
`;