import { appendFile } from "fs";
import extractToken from "../../utilities/extractToken";

describe("Extract Token Tests", () => {
  it("Extracts token from bearer token", () => {
    const headers = { authorization: "bearer 1234" };
    expect(extractToken(headers)).toBe("1234");
  });
});
