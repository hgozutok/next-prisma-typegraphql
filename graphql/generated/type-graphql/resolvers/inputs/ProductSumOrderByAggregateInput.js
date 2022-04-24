"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSumOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductSumOrderByAggregateInput = class ProductSumOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductSumOrderByAggregateInput.prototype, "companyId", void 0);
ProductSumOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductSumOrderByAggregateInput", {
        isAbstract: true
    })
], ProductSumOrderByAggregateInput);
exports.ProductSumOrderByAggregateInput = ProductSumOrderByAggregateInput;
