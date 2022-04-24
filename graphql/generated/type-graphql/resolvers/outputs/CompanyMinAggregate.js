"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CompanyMinAggregate = class CompanyMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMinAggregate.prototype, "adress", void 0);
CompanyMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CompanyMinAggregate", {
        isAbstract: true
    })
], CompanyMinAggregate);
exports.CompanyMinAggregate = CompanyMinAggregate;
