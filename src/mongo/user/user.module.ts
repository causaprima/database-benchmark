import { forwardRef, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/user.schema";
import { UserService } from "./user.service";
import { UserResolverMongo } from "./user.resolver";

@Module({
  imports: [MongooseModule.forFeature([
    {name: User.name, schema: UserSchema}
  ])],
  providers: [UserService, UserResolverMongo]
})
export class UserModule {}