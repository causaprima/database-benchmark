import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./entities/user.entity";
import { UserService } from "./user.service";
import { UserResolverPostgres } from "./user.resolver";
import { RoleModule } from "../role/role.module";
import { StatusModule } from "../status/status.module";

@Module({
  imports: [
    forwardRef(() => RoleModule),
    forwardRef(() => StatusModule),
    TypeOrmModule.forFeature([
      UserEntity,
    ])
  ],
  providers: [UserService, UserResolverPostgres],
  exports: [UserService]
})
export class UserModule {}