import React from 'react';
import { Grommet } from 'grommet';

import './App.css';
import { LandingPage } from './modules/LandingPage';
import Navbar from './components/Navbar';
import { COLORS } from './common/constants';
import useFetchIdeas from './common/hooks/useFetchIdeas';
import { MediaContextProvider } from './media';

const myTheme = {
  global: {
    colors: {
      brand: COLORS.blue,
    },
  },
};

function App() {
  const { ideas, isLoading, fetchIdeas } = useFetchIdeas();
  return (
    <MediaContextProvider>
      <Grommet theme={myTheme}>
        <div className="App">
          <Navbar fetchIdeas={fetchIdeas} />
          <LandingPage
            ideas={ideas}
            isLoading={isLoading}
            fetchIdeas={fetchIdeas}
          />
        </div>
      </Grommet>
    </MediaContextProvider>
  );
}

export default App;
