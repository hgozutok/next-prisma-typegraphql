"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyMinOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CompanyMinOrderByAggregateInput = class CompanyMinOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMinOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMinOrderByAggregateInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CompanyMinOrderByAggregateInput.prototype, "adress", void 0);
CompanyMinOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CompanyMinOrderByAggregateInput", {
        isAbstract: true
    })
], CompanyMinOrderByAggregateInput);
exports.CompanyMinOrderByAggregateInput = CompanyMinOrderByAggregateInput;
