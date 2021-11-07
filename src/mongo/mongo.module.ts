import { Module } from "@nestjs/common";
import { StatusModule } from "./status/status.module";
import { RoleModule } from "./role/role.module";
import { UserModule } from "./user/user.module";
import { JokeModule } from "./joke/joke.module";
import { GroupModule } from "./group/group.module";
import { LevelModule } from "./level/level.module";
import { UserInGroupModule } from "./userInGroup/userInGroup.module";

@Module({
  imports: [
    StatusModule,
    RoleModule,
    UserModule,
    JokeModule,
    LevelModule,
    GroupModule,
    UserInGroupModule,
  ],
  controllers: [],
  providers: [],
})
export class MongoModule {}