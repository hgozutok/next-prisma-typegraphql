import { OrderOrderByWithRelationInput } from "../../../inputs/OrderOrderByWithRelationInput";
import { OrderWhereInput } from "../../../inputs/OrderWhereInput";
import { OrderWhereUniqueInput } from "../../../inputs/OrderWhereUniqueInput";
export declare class CompanyOrderArgs {
    where?: OrderWhereInput | undefined;
    orderBy?: OrderOrderByWithRelationInput[] | undefined;
    cursor?: OrderWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "amount" | "customerId" | "companyId"> | undefined;
}
