import React from "react";
import { useRouteError, Link } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div
      id="error-page"
      className="d-flex flex-column align-items-center justify-content-center vh-100 text-center bg-light"
    >
      <h1 className="display-3 fw-bold text-danger mb-3">Oops!</h1>
      <p className="lead text-secondary mb-2">
        Sorry, an unexpected error has occurred.
      </p>
      <p className="text-muted mb-4">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/" className="btn btn-primary btn-lg shadow">
        ⬅ Back to Homepage
      </Link>
    </div>
  );
};

export default ErrorPage;
