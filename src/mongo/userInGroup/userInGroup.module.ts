import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserInGroup, UserInGroupSchema } from "./schemas/userInGroup.schema";
import { UserInGroupService } from "./userInGroup.service";
import { UserInGroupResolverMongo } from "./userInGroup.resolver";

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: UserInGroup.name, schema: UserInGroupSchema}
    ])
  ],
  providers: [UserInGroupService, UserInGroupResolverMongo]
})
export class UserInGroupModule {}