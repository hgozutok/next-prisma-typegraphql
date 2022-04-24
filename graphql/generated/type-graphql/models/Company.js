"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CompanyCount_1 = require("../resolvers/outputs/CompanyCount");
let Company = class Company {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Company.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Company.prototype, "adress", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CompanyCount_1.CompanyCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CompanyCount_1.CompanyCount)
], Company.prototype, "_count", void 0);
Company = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Company", {
        isAbstract: true
    })
], Company);
exports.Company = Company;
