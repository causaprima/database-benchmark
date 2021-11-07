import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { GroupResolverMongo } from "./group.resolver";
import { GroupService } from "./group.service";
import { Group, GroupSchema } from "./schemas/group.schema";
import { LevelModule } from "../level/level.module";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: Group.name, schema: GroupSchema}
    ])
  ],
  providers: [GroupService, GroupResolverMongo],
})
export class GroupModule {}