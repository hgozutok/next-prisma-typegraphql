"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CustomerWhereInput_1 = require("../inputs/CustomerWhereInput");
let CustomerRelationFilter = class CustomerRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CustomerRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CustomerWhereInput_1.CustomerWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CustomerWhereInput_1.CustomerWhereInput)
], CustomerRelationFilter.prototype, "isNot", void 0);
CustomerRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerRelationFilter", {
        isAbstract: true
    })
], CustomerRelationFilter);
exports.CustomerRelationFilter = CustomerRelationFilter;
