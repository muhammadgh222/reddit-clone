import { Post } from "./entities/Post";
import dotenv from "dotenv";
import { MikroORM } from "@mikro-orm/core";

dotenv.config({ path: "./.env" });

export default {
  dbName: process.env.DB_NAME,
  type: "postgresql",
  entities: [Post],
  debug: process.env.NODE_ENV !== "production",
  allowGlobalContext: true,
  user: process.env.USER_NAME,
  password: process.env.PASSWORD,
  /*user: process.env.USER_NAME,
          password: process.env.PASSWORD,
          host: process.env.HOST,
          port: 5432,*/
} as Parameters<typeof MikroORM.init>[0];
