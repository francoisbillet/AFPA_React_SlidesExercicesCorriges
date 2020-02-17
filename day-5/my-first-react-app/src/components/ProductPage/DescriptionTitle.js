import React from "react";

const DescriptionTitle = props => {
  return (
    <React.Fragment>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </React.Fragment>
  );
};

export default DescriptionTitle;
