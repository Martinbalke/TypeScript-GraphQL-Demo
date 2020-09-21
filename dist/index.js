"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@mikro-orm/core");
const constants_1 = require("./constants");
const posts_1 = require("./entities/posts");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const orm = yield core_1.MikroORM.init({
        dbName: 'lireddit',
        user: 'martinbalke',
        password: 'postgres',
        type: 'postgresql',
        entities: [posts_1.Post],
        debug: !constants_1.__prod__
    });
    const post = orm.em.create(posts_1.Post, { title: 'first post' });
    yield orm.em.persistAndFlush(post);
});
main();
//# sourceMappingURL=index.js.map