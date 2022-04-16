// Determine if a request is being made by an app running on localhost
export default function isLocalhost(req) {
  const ip = req.connection.remoteAddress;
  const host = req.get("host");

  return (
    ip === "127.0.0.1" ||
    ip === "::ffff:127.0.0.1" ||
    ip === "::1" ||
    host.indexOf("localhost") !== -1
  );
}
