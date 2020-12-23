import React from "react";
import PropTypes from "prop-types";

const Food = (props) => {
  const showModal = (id) => {
    console.log(id);
  }

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-3'>
          <button className='btn' onClick={() => showModal(props.id)}>{props.name}</button>
        </div>
        <div className='col-3'>
          <p>{props.category}</p>
        </div>
        <div className='col-3'>
          <p>{props.subcat}</p>
        </div>
      </div>
    </React.Fragment>
  )
}

Food.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  subcat: PropTypes.string,
  id: PropTypes.string
};

export default Food