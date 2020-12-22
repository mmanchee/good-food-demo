import React from "react";
import PropTypes from "prop-types";

const Issues = (props) => {
  const showModal = (id) => {
    console.log(id);
  }
  const dv= 0;

  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-4'>
          <button className='btn' onClick={() => showModal(props.id)}>{props.name}</button>
        </div>
        <div className='col-7'>
          <input type="range" min='0' max='3' defaultValue={dv} id={props.name} />
        </div>
      </div>
    </React.Fragment>
  )
}

Issues.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string
};

export default Issues