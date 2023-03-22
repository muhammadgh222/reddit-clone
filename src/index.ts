import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import mikroOrm from "./mikro-orm.config";

const main = async () => {
  try {
    const orm = await MikroORM.init(mikroOrm);

    const post = orm.em.create(Post, { title: "Title" });

    await orm.em.persistAndFlush(post);
  } catch (error) {
    console.log(error);
  }
};

main();
