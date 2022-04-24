"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCreateManyInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductCreateManyInput = class ProductCreateManyInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], ProductCreateManyInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyInput.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ProductCreateManyInput.prototype, "companyId", void 0);
ProductCreateManyInput = tslib_1.__decorate([
    TypeGraphQL.InputType("ProductCreateManyInput", {
        isAbstract: true
    })
], ProductCreateManyInput);
exports.ProductCreateManyInput = ProductCreateManyInput;
