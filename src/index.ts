import { MikroORM} from '@mikro-orm/core'
import { __prod__ } from './constants';
import { Post } from './entities/posts';



const main = async () => {
  const orm = await MikroORM.init({
    dbName:'lireddit',
    user:'martinbalke',
    password: 'postgres',
    type: 'postgresql',
    entities: [Post],
    debug: !__prod__
  });

  const post = orm.em.create(Post, {title: 'first post'});
  await orm.em.persistAndFlush(post);
  
}

main();
