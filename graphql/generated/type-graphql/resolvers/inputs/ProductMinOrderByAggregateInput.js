"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let ProductMinOrderByAggregateInput = class ProductMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductMinOrderByAggregateInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductMinOrderByAggregateInput.prototype, "companyId", void 0);
ProductMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductMinOrderByAggregateInput", {
        isAbstract: true
    })
], ProductMinOrderByAggregateInput);
exports.ProductMinOrderByAggregateInput = ProductMinOrderByAggregateInput;
