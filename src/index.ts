import { MikroORM } from '@mikro-orm/core';
import { Post } from './entities/posts';
import microConfig from './mikro-orm.config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';
import { HelloResolver } from './resolvers/hello';

const main = async () => {
	const orm = await MikroORM.init(microConfig);
	await orm.getMigrator().up();
	// const post = orm.em.create(Post, {title: 'first post'});
	// await orm.em.persistAndFlush(post);

	const app = express();
	const apolloserver = new ApolloServer({
		schema: await buildSchema({
			resolvers: [HelloResolver],
			validate: false,
		}),
	});
	app.listen(4000, () => {
		console.log('Live on 4000');
	});

	apolloserver.applyMiddleware({ app });
};

main();
