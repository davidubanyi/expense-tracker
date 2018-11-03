import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      this is the 404 page <Link to="/">go to home</Link>
    </div>
  );
};

export default NotFoundPage;
