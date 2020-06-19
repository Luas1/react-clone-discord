import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: channel-data;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const MessagesList = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const MessageBox = styled.div`
  width: 100%;
  padding: 0 16px;
`;

export const InputMessageIcon = styled(AlternateEmail)`
  width: 24px;
  height: 24px;
  color: var(--gray);
`;

export const InputMessage = styled.input`
  width: 100%;
  height: 44px;

  padding: 0 10px 0 57px;
  border-radius: 7px;
  background-color: var(--chat-input);
  color: var(--white);

  position: relative;

  &::placeholder {
    color: var(--gray);
  }

  & ~ svg {
    position: relative;
    top: -50%;
    left: 14px;
    transition: .180s ease-in-out;
  }
`;

export const SendMessageButton = styled.button``;

export const SendMessageIcon = styled.div``;