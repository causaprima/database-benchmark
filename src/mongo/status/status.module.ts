import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Status, StatusSchema } from "./schemas/status.schema";
import { StatusService } from "./status.service";
import { StatusResolverMongo } from "./status.resolver";

@Module({
  imports: [MongooseModule.forFeature([
    {name: Status.name, schema: StatusSchema}
  ])],
  providers: [StatusService, StatusResolverMongo]
})
export class StatusModule {}