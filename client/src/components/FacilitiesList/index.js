import React from 'react';

const FacilitiesList = ({ facilities }) => {
  if (!facilities.length) {
    return <h3>No facilities found</h3>;
  }

  return (
    <div>
      {facilities &&
        facilities.map(facility => (
          <div key={facility.Id} className="card mb-3">
            <h2 className="card-header">
              {facility.name}
            </h2>
            <div className="card-body">
              <p>{facility.address}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FacilitiesList;
