import { MikroORM} from '@mikro-orm/core'
import { Post } from './entities/posts';
import microConfig from './mikro-orm.config';


const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, {title: 'first post'});
  // await orm.em.persistAndFlush(post);
}

main();
