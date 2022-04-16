import createServer from "../../server";
import superTest from "supertest";
const app = createServer();
const request = superTest(app);

describe("Here we will test second example Integration tests", () => {
  it("Returns with pong", async () => {
    const res = await request.get("/example");
    expect(res.status).not.toBe(400);
  });
});
