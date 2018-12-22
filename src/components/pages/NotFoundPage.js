import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout";

const NotFoundPage = () => {
  return (
    <Layout>
      <div>
        this is the 404 page <Link to="/">go to home</Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
