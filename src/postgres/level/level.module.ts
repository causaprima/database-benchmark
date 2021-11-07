import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { LevelEntity } from "./entities/level.entity";
import { LevelService } from "./level.service";
import { LevelResolverPostgres } from "./level.resolver";
import { GroupModule } from "../group/group.module";

@Module({
  imports: [
    forwardRef(() => GroupModule),
    TypeOrmModule.forFeature([
      LevelEntity
    ])
  ],
  providers: [LevelService, LevelResolverPostgres],
  exports: [LevelService]
})
export class LevelModule {}