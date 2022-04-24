"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ProductCreateInput_1 = require("../../../inputs/ProductCreateInput");
let CreateProductArgs = class CreateProductArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ProductCreateInput_1.ProductCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", ProductCreateInput_1.ProductCreateInput)
], CreateProductArgs.prototype, "data", void 0);
CreateProductArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateProductArgs);
exports.CreateProductArgs = CreateProductArgs;
