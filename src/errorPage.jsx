import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="error-container">
      <h1>Sorry, an unexpected error has occurred.</h1>
      <i>{error.statusText || error.message}</i>
    </div>
  );
};

export default ErrorPage;
