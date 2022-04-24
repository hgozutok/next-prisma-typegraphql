"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateUserResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const AggregateUserArgs_1 = require("./args/AggregateUserArgs");
const User_1 = require("../../../models/User");
const AggregateUser_1 = require("../../outputs/AggregateUser");
const helpers_1 = require("../../../helpers");
let AggregateUserResolver = class AggregateUserResolver {
    async aggregateUser(ctx, info, args) {
        return (0, helpers_1.getPrismaFromContext)(ctx).user.aggregate({
            ...args,
            ...(0, helpers_1.transformFields)((0, graphql_fields_1.default)(info)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => AggregateUser_1.AggregateUser, {
        nullable: false
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, AggregateUserArgs_1.AggregateUserArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], AggregateUserResolver.prototype, "aggregateUser", null);
AggregateUserResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => User_1.User)
], AggregateUserResolver);
exports.AggregateUserResolver = AggregateUserResolver;