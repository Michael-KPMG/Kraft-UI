import { useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error); // for debugging

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>Oops!</h1>
      <p>Something went wrong.</p>
      {error?.status && <p>Status: {error.status}</p>}
      {error?.statusText && <p>{error.statusText}</p>}
      {error?.message && <p>{error.message}</p>}
      <a href="/">🔙 Go Back Home</a>
    </div>
  );
};

export default ErrorPage;
