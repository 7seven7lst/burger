import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { addBurger } from '../actions';
import moment from 'moment';
import * as _ from 'lodash';

const AddBurger = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          let newBurger = _.assign({}, 
            {
              burger_name: input.value,
              devoured: false, 
              date: moment().format('YYYY-MM-DD HH:mm:ss')
            });
          dispatch(addBurger(newBurger));
          input.value = '';
        }}
      >
        <input ref={node => { input = node; }} />
        <button type="submit">
          Add Burger
        </button>
      </form>
    </div>
  );
};

AddBurger.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(AddBurger);
