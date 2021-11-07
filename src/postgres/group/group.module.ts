import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GroupEntity } from "./entities/group.entity";
import { GroupService } from "./group.service";
import { GroupResolverPostgres } from "./group.resolver";
import { LevelModule } from "../level/level.module";

@Module({
  imports: [
    forwardRef(() => LevelModule),
    TypeOrmModule.forFeature([
      GroupEntity
    ])
  ],
  providers: [GroupService, GroupResolverPostgres],
  exports: [GroupService]
})
export class GroupModule {}