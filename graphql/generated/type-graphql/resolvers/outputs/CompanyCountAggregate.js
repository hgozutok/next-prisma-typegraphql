"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyCountAggregate = class CompanyCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCountAggregate.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCountAggregate.prototype, "_all", void 0);
CompanyCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyCountAggregate", {
        isAbstract: true
    })
], CompanyCountAggregate);
exports.CompanyCountAggregate = CompanyCountAggregate;
