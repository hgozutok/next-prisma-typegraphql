"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderDetailResolver = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const graphql_fields_1 = tslib_1.__importDefault(require("graphql-fields"));
const graphql_1 = require("graphql");
const UpdateOrderDetailArgs_1 = require("./args/UpdateOrderDetailArgs");
const OrderDetail_1 = require("../../../models/OrderDetail");
const helpers_1 = require("../../../helpers");
let UpdateOrderDetailResolver = class UpdateOrderDetailResolver {
    async updateOrderDetail(ctx, info, args) {
        const { _count } = (0, helpers_1.transformFields)((0, graphql_fields_1.default)(info));
        return (0, helpers_1.getPrismaFromContext)(ctx).orderDetail.update({
            ...args,
            ...(_count && (0, helpers_1.transformCountFieldIntoSelectRelationsCount)(_count)),
        });
    }
};
tslib_1.__decorate([
    TypeGraphQL.Mutation(_returns => OrderDetail_1.OrderDetail, {
        nullable: true
    }),
    tslib_1.__param(0, TypeGraphQL.Ctx()),
    tslib_1.__param(1, TypeGraphQL.Info()),
    tslib_1.__param(2, TypeGraphQL.Args()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, typeof (_a = typeof graphql_1.GraphQLResolveInfo !== "undefined" && graphql_1.GraphQLResolveInfo) === "function" ? _a : Object, UpdateOrderDetailArgs_1.UpdateOrderDetailArgs]),
    tslib_1.__metadata("design:returntype", Promise)
], UpdateOrderDetailResolver.prototype, "updateOrderDetail", null);
UpdateOrderDetailResolver = tslib_1.__decorate([
    TypeGraphQL.Resolver(_of => OrderDetail_1.OrderDetail)
], UpdateOrderDetailResolver);
exports.UpdateOrderDetailResolver = UpdateOrderDetailResolver;