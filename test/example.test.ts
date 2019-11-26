import request from "supertest";
import app from "../src/index";
test("Example unit test", async done => {
  const res = await request(app).get("/get");
  expect(res.status).toBe(200);
  // ...
  done();
});
