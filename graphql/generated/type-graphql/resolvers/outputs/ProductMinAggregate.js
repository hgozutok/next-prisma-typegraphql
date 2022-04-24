"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ProductMinAggregate = class ProductMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ProductMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductMinAggregate.prototype, "price", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ProductMinAggregate.prototype, "companyId", void 0);
ProductMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ProductMinAggregate", {
        isAbstract: true
    })
], ProductMinAggregate);
exports.ProductMinAggregate = ProductMinAggregate;
