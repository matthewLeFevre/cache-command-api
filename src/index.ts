import createServer from "./server";

createServer().listen(process.env.PORT, () => {
  console.log(`Starter service project running on port ${process.env.PORT}`);
});
