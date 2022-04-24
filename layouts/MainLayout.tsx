import { Container } from '@mui/material';
import React, { ReactNode } from 'react';
import Navbar from '../components/Navbar';
import Player from '../components/Player';

type Props = {
  children: ReactNode;
};

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{ marginTop: '90px' }}>
        {children}
      </Container>
      <Player />
    </>
  )
}

export default MainLayout;