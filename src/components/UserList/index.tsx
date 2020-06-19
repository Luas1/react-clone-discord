import React from 'react';

import { Container, Role } from './styles';
import UserItem from '../UserItem';

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponivel - 1</Role>
      <UserItem nickname="Guilherme Rodz" />

      <Role>Offline - 18</Role>
      <UserItem nickname="Diego Fernandes" isBot />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
      <UserItem nickname="Diego Fernandes" />
    </Container>
  );
}

export default UserList;