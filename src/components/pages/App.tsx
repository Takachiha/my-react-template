import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Path from '@/routes/Path';
import GlobalCounter from '@/containers/common/GlobalCounter';
import HooksCounter from '@/components/common/HooksCounter';

const App: React.FC = (): ReactElement => {
  return (
    <div className="App">
      <PageLink to={Path.page}>Page</PageLink>
      <GlobalCounter />
      <HooksCounter />
    </div>
  );
};

const PageLink = styled(Link)`
  color: #000;
  margin-top: 30px;
`;

export default App;
