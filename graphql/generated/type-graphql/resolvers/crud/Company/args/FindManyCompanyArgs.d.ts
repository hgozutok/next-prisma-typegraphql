import { CompanyOrderByWithRelationInput } from "../../../inputs/CompanyOrderByWithRelationInput";
import { CompanyWhereInput } from "../../../inputs/CompanyWhereInput";
import { CompanyWhereUniqueInput } from "../../../inputs/CompanyWhereUniqueInput";
export declare class FindManyCompanyArgs {
    where?: CompanyWhereInput | undefined;
    orderBy?: CompanyOrderByWithRelationInput[] | undefined;
    cursor?: CompanyWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "adress"> | undefined;
}
