"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAccountResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const CreateAccountArgs_1 = require("./args/CreateAccountArgs");
const Account_1 = require("../../../models/Account");
const helpers_1 = require("../../../helpers");
let CreateAccountResolver = class CreateAccountResolver {
    async createAccount(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).account.create({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => Account_1.Account, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, CreateAccountArgs_1.CreateAccountArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], CreateAccountResolver.prototype, "createAccount", null);
CreateAccountResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Account_1.Account)
], CreateAccountResolver);
exports.CreateAccountResolver = CreateAccountResolver;
