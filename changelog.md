# Changelog

# v1.3.0 Minor

- Added the CORS dependency and configrured it in server.ts
- Removed the generateRandomId method in favor of the [crypto.randomUUID](https://nodejs.org/api/crypto.html#cryptorandomuuidoptions) method built into nodejs
- Removed the send method in favor of [@everlast-brands/error-handling](https://www.npmjs.com/package/@everlast-brands/error-handling) which is now a default dependency on this project
- Removed pino-http logging because it does not work on google app-engine enviornments
- Removed jsonwebtoken dependency due to it not being used in every project

# v1.2.0 Minor

- Added common use case documentation
- Added status to the send method so that more detailed success statuses can be sent to the client.

# v1.1.0 Minor

- Added logging functionality with pino
