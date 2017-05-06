import React, { PropTypes } from 'react';

const Burger = ({ onClick, devoured, burger_name }) => (
  <li
    onClick={onClick}
    style={{
      textDecoration: devoured ? 'line-through' : 'none',
    }}
  >
    {burger_name}
  </li>
);

Burger.propTypes = {
  onClick: PropTypes.func.isRequired,
  devoured: PropTypes.bool.isRequired,
  burger_name: PropTypes.string.isRequired,
};

export default Burger;
