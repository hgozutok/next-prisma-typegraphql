import { ProductOrderByWithAggregationInput } from "../../../inputs/ProductOrderByWithAggregationInput";
import { ProductScalarWhereWithAggregatesInput } from "../../../inputs/ProductScalarWhereWithAggregatesInput";
import { ProductWhereInput } from "../../../inputs/ProductWhereInput";
export declare class GroupByProductArgs {
    where?: ProductWhereInput | undefined;
    orderBy?: ProductOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "price" | "companyId">;
    having?: ProductScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
