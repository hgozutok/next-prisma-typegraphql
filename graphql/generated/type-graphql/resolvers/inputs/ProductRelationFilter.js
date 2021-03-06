"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductWhereInput_1 = require("../inputs/ProductWhereInput");
let ProductRelationFilter = class ProductRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductWhereInput_1.ProductWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ProductWhereInput_1.ProductWhereInput)
], ProductRelationFilter.prototype, "isNot", void 0);
ProductRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductRelationFilter", {
        isAbstract: true
    })
], ProductRelationFilter);
exports.ProductRelationFilter = ProductRelationFilter;
