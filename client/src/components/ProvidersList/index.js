import React from 'react';

const ProvidersList = ({ providers }) => {
  if (!providers.length) {
    return <h3>No providers found</h3>;
  }

  return (
    <div>
      {/* {providers &&
        providers.map(provider => (
          <div key={provider._id} className="card mb-3">
            <h2 className="card-header">
              {provider.name}
            </h2>
            <div className="card-body">
              <p>{provider.title}
              {provider.facilityId}
            </p>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default ProvidersList;