"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let CustomerAvgAggregate = class CustomerAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerAvgAggregate.prototype, "customerId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], CustomerAvgAggregate.prototype, "companyId", void 0);
CustomerAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("CustomerAvgAggregate", {
        isAbstract: true
    })
], CustomerAvgAggregate);
exports.CustomerAvgAggregate = CustomerAvgAggregate;
