"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyCustomersArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerOrderByWithRelationInput_1 = require("../../../inputs/CustomerOrderByWithRelationInput");
const CustomerWhereInput_1 = require("../../../inputs/CustomerWhereInput");
const CustomerWhereUniqueInput_1 = require("../../../inputs/CustomerWhereUniqueInput");
const CustomerScalarFieldEnum_1 = require("../../../../enums/CustomerScalarFieldEnum");
let CompanyCustomersArgs = class CompanyCustomersArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CompanyCustomersArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerOrderByWithRelationInput_1.CustomerOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyCustomersArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereUniqueInput_1.CustomerWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereUniqueInput_1.CustomerWhereUniqueInput)
], CompanyCustomersArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCustomersArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CompanyCustomersArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CustomerScalarFieldEnum_1.CustomerScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CompanyCustomersArgs.prototype, "distinct", void 0);
CompanyCustomersArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CompanyCustomersArgs);
exports.CompanyCustomersArgs = CompanyCustomersArgs;
