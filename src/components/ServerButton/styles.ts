import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-bottom: 8px;
  background-color: ${(props) => props.isHome ? 'var(--my-avatar)' : 'var(--primary)'};
  cursor: pointer;
  position: relative;
  border-radius: 50%;
  transition: border-radius .2s, background-color .2s;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: var(--white);
    border-radius: 50%;
    display: ${(props) => props.hasNotifications ? 'inline' : 'none' }
  }
  &::after {
    content: '${(props) => props.wasMentioned && props.wasMentioned}';
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid var(--quaternary);
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    display: ${(props) => props.wasMentioned && props.wasMentioned > 0 ? 'inline' : 'none' }
  }

  &:active, &:hover {
    border-radius: 16px;
    background-color: ${(props) => props.isHome ? 'var(--my-avatar)' : 'var(--discord)'}
  }

  img {
    width: 24px;
    height: 24px;
    max-width: 100%;
    border-radius: 50%;
  }
`;