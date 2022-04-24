"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindUniqueProductResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const FindUniqueProductArgs_1 = require("./args/FindUniqueProductArgs");
const Product_1 = require("../../../models/Product");
const helpers_1 = require("../../../helpers");
let FindUniqueProductResolver = class FindUniqueProductResolver {
    async product(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).product.findUnique({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Query(_returns => Product_1.Product, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, FindUniqueProductArgs_1.FindUniqueProductArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], FindUniqueProductResolver.prototype, "product", null);
FindUniqueProductResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => Product_1.Product)
], FindUniqueProductResolver);
exports.FindUniqueProductResolver = FindUniqueProductResolver;
