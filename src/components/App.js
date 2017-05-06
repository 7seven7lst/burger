import React, { PropTypes } from 'react';
import Footer from './Footer';
import AddBurger from './AddBurger';
import VisibleBurgerList from './VisibleBurgerList';

const App = () => (
  <div>
    <AddBurger />
    <VisibleBurgerList />
    <Footer />
  </div>
);

App.propTypes = {
  params: PropTypes.shape({
    filter: PropTypes.string,
  }),
};

export default App;
