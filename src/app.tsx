import { BrowserRouter as Router } from 'react-router-dom';

import { RootLayout } from '@/layout';

export const AppView = () => {
  return (
    <Router>
      <RootLayout />
    </Router>
  )
};
