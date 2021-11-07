import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { LevelResolverMongo } from "./level.resolver";
import { LevelService } from "./level.service";
import { Level, LevelSchema } from "./schemas/level.schema";
import { GroupModule } from "../group/group.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Level.name, schema: LevelSchema}
    ])
  ],
  providers: [LevelService, LevelResolverMongo],
})
export class LevelModule {}