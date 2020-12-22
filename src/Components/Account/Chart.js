import React from 'react';
import PropTypes from 'prop-types';
import issueList from './SeedIssues';
import Issues from './Issues';

const Chart = (props) => {
  const { onChangePage } = props;

  return (
    <React.Fragment>
      <p>Chart</p>
      <div className='box'>
        <div className='inner-box'>
          {issueList.map((issue, index) =>
            <Issues 
              name={issue.Issue}
              id={index}
            />
          )}
        </div>
      </div>
      <div className='centering'>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Back</button>
        <button className='btn btn-info landing-btn' onClick = { () => onChangePage('Account') }>Submit</button>
      </div>
    </React.Fragment>
  )
}

Chart.propType = {
  onChangePage: PropTypes.func
}

export default Chart;