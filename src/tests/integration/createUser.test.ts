import createServer from "../../server";
import superTest from "supertest";
import post from "./post";
const app = createServer();
const request = superTest(app);

describe("Here we will test example Integration tests", () => {
  it("Returns with pong", async () => {
    const res: any = await post(request, "/users", {});
    expect(res.status).toBe(200);
    expect(res.body.data.ping).toBe("pong");
  });
});
