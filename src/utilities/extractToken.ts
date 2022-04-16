export default function extractToken(headers) {
  const { authorization } = headers;
  return authorization.split(" ")[1];
}
