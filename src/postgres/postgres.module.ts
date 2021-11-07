import { Module } from "@nestjs/common";
import { UserModule } from "./user/user.module";
import { RoleModule } from "./role/role.module";
import { StatusModule } from "./status/status.module";
import { JokeModule } from "./joke/joke.module";
import { LevelModule } from "./level/level.module";
import { GroupModule } from "./group/group.module";
import { UserInGroupModule } from "./userInGroup/userInGroup.module";

@Module({
  imports: [
    UserModule,
    RoleModule,
    StatusModule,
    JokeModule,
    LevelModule,
    GroupModule,
    UserInGroupModule,
  ],
  controllers: [],
  providers: [],
})
export class PostgresModule {}