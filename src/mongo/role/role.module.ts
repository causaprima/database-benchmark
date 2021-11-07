import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Role, RoleSchema } from "./schemas/role.schema";
import { RoleService } from "./role.service";
import { RoleResolverMongo } from "./role.resolver";

@Module({
  imports: [MongooseModule.forFeature([
    {name: Role.name, schema: RoleSchema}
  ])],
  providers: [RoleService, RoleResolverMongo]
})
export class RoleModule {}