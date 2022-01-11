import React from 'react';

const ProceduresList = ({procedures}) => {
  if (!procedures.length) {
    return <h3>No procedures found</h3>;
  }

  return (
    <div>
      {procedures &&
        procedures.map(procedure => (
          <div key={procedure.Id} className="card mb-3">
            <h2 className="card-header">
              {procedure.Procedure}
            </h2>
            <div className="card-body">
              <p>{procedure.CPTCode}</p>
                <p>{procedure.Price}</p>
                <p>{procedure.FacilityId}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProceduresList;
