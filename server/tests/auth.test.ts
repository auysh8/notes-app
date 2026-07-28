import mongoose from "mongoose";
import app from "../index";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";

let mongoServer: MongoMemoryServer;

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

describe("Authentication Api", () => {
  it("should block a user who have not yet registered", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "xyz@gmail.com", password: "12345" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("User not found");
  });

  it("should successfully register a user", async () => {
    const response = await request(app)
      .post("/api/auth/register")
      .send({ name: "xyz", email: "xyz@gmail.com", password: "12345" });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("User registered");
  });

  it("should block a user registering with the existing email address", async () => {
    const response = await request(app).post("/api/auth/register").send({
      name: "anotherguy",
      email: "xyz@gmail.com",
      password: "anotherpassword",
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe("User already exists");
  });

  it("should block a user using wrong password", async () => {
    const response = await request(app)
      .post("/api/auth/login")
      .send({ email: "xyz@gmail.com", password: "wrongPassword" });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe("Wrong password");
  });

  it("should login a user", async () => {
    const response = await request(app).post("/api/auth/login").send({
      email: "xyz@gmail.com",
      password: "12345",
    });
    expect(response.status).toBe(200);
    expect(response.body.message).toBe("User loged in");
  });
});
