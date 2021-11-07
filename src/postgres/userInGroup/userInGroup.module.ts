import { forwardRef, Module } from "@nestjs/common";
import { UserInGroupEntity } from "./entities/userInGroup.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserInGroupService } from "./userInGroup.service";
import { UserInGroupResolverPostgres } from "./userInGroup.resolver";
import { UserModule } from "../user/user.module";
import { GroupModule } from "../group/group.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    forwardRef(() => GroupModule),
    TypeOrmModule.forFeature([
      UserInGroupEntity
    ])
  ],
  providers: [UserInGroupService, UserInGroupResolverPostgres]
})
export class UserInGroupModule {}