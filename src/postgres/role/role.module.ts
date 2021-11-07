import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RoleEntity } from "./entities/role.entity";
import { RoleResolverPostgres } from "./role.resolver";
import { RoleService } from "./role.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([
      RoleEntity,
    ])
  ],
  providers: [RoleService, RoleResolverPostgres],
  exports: [RoleService]
})
export class RoleModule {}