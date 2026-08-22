import mongoose from "mongoose";
import request from "supertest";
import { MongoMemoryServer } from "mongodb-memory-server";
import app from "../index";

let mongoServer: MongoMemoryServer;
let token: string;
let noteId: string;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  await request(app)
    .post("/api/auth/register")
    .send({ name: "xyz", email: "xyz@gmail.com", password: "12345" });

  const response = await request(app)
    .post("/api/auth/login")
    .send({ email: "xyz@gmail.com", password: "12345" });

  token = response.body.token;
});

describe("Notes api", () => {
  it("should block fetching notes without a token", async () => {
    const response = await request(app).get(`/api/notes/`);

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Invalid token");
  });
  it("should allow fetching notes with a valid token", async () => {
    const response = await request(app)
      .get("/api/notes/")
      .set("Authorization", `Bearer ${token}`);
    expect(response.status).toBe(200);
  });
  it("should create a new note", async () => {
    const response = await request(app)
      .post("/api/notes/")
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Hello",
        content: "Hello my first note",
        color: "#ffffff",
      });
    expect(response.status).toBe(200);
    noteId = response.body.note._id;
  });
  it("should update a existing note", async () => {
    const response = await request(app)
      .put(`/api/notes/${noteId}`)
      .set("Authorization", `Bearer ${token}`)
      .send({
        title: "Hello",
        content: "Hello my first note",
        color: "#000000",
      });
    expect(response.status).toBe(200);
  });
});
