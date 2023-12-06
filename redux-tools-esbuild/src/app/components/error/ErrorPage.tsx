import React from 'react';
import { useRouteError } from "react-router-dom";

type RouterError = {
  statusText?: string;
  message?: string;
};

function ErrorPage() {
  const error = useRouteError() as RouterError;

  return (
    <div className="error-page">
      Error. Something went wrong.
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
