import React from 'react';

const ProceduresList = () => {
  // if (!procedures.length) {
  //   return <h3>No procedures found</h3>;
  // }

  return (
    <div>
      <button>testing</button>
      {/* {procedures &&
        procedures.map(procedure => (
          <div key={procedure._id} className="card mb-3">
            <h2 className="card-header">
              {procedure.name}
            </h2>
            <div className="card-body">
              <p>{procedure.cpt}
                {procedure.price}
                {procedure.specialtyId}</p>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default ProceduresList;
