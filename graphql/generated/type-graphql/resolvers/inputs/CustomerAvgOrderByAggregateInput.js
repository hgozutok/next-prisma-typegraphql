"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAvgOrderByAggregateInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const SortOrder_1 = require("../../enums/SortOrder");
let CustomerAvgOrderByAggregateInput = class CustomerAvgOrderByAggregateInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerAvgOrderByAggregateInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerAvgOrderByAggregateInput.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CustomerAvgOrderByAggregateInput.prototype, "companyId", void 0);
CustomerAvgOrderByAggregateInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CustomerAvgOrderByAggregateInput", {
        isAbstract: true
    })
], CustomerAvgOrderByAggregateInput);
exports.CustomerAvgOrderByAggregateInput = CustomerAvgOrderByAggregateInput;
