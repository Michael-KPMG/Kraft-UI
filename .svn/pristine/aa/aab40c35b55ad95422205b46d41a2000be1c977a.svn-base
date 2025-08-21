export async function authLoader({ request }) {
  const token = localStorage.getItem("token");

  if (!token) {
    const currentUrl = new URL(request.url);
    const redirectTo = currentUrl.pathname + currentUrl.search;

    throw new Response(null, {
      status: 302,
      headers: {
        Location: `/login`
      }
    });
  }

  return true;
}

export default authLoader;