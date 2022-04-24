"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstOrderResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const FindFirstOrderArgs_1 = require("./args/FindFirstOrderArgs");
const Order_1 = require("../../../models/Order");
const helpers_1 = require("../../../helpers");
let FindFirstOrderResolver = class FindFirstOrderResolver {
    async findFirstOrder(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).order.findFirst({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Order_1.Order, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindFirstOrderArgs_1.FindFirstOrderArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindFirstOrderResolver.prototype, "findFirstOrder", null);
FindFirstOrderResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Order_1.Order)
], FindFirstOrderResolver);
exports.FindFirstOrderResolver = FindFirstOrderResolver;
