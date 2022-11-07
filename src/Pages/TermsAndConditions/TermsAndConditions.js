import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div>
      <h2>Here is out terms and condition</h2>
      <h3>
        Go back to <Link to="/register">Register</Link>
      </h3>
    </div>
  );
};

export default TermsAndConditions;
