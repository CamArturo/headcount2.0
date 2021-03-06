import React from 'react';
import DistrictCard from './../DistrictCard/DistrictCard';
import ComparisonCard from './../ComparisonCard/ComparisonCard';
import './CompareDistricts.css';
import PropTypes from 'prop-types';

const CompareDistricts = props => {
  const firstCard = (props.selectedDistricts[0] &&
    <DistrictCard
      districtData={props.selectedDistricts[0]}
      handleSelect={props.handleSelect}
      comparisonCard={props.comparisonCard}
    />
  );
  const comparisonCard = (
    typeof props.selectedDistricts[0] === 'object'
    && typeof props.selectedDistricts[1] === 'object'
    && <ComparisonCard
      selectedDistricts={props.selectedDistricts}
      comparisonData={props.comparisonData}
    />
  );
  const secondCard = (props.selectedDistricts[1] &&
    <DistrictCard
      districtData={props.selectedDistricts[1]}
      handleSelect={props.handleSelect}
      comparisonCard={props.comparisonCard}
    />
  );

  return (
    <div className='districts-compare'>
      {firstCard}
      {comparisonCard}
      {secondCard}
    </div>
  );
};

CompareDistricts.propTypes = {
  comparisonCard: PropTypes.bool.isRequired,
  comparisonData: PropTypes.object.isRequired,
  selectedDistricts: PropTypes.array.isRequired,
  handleSelect: PropTypes.func.isRequired
};


export default CompareDistricts;


