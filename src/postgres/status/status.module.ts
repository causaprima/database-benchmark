import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StatusEntity } from "./entities/status.entity";
import { StatusResolverPostgres } from "./status.resolver";
import { StatusService } from "./status.service";
import { UserModule } from "../user/user.module";

@Module({
  imports: [
    forwardRef(() => UserModule),
    TypeOrmModule.forFeature([
      StatusEntity,
    ])
  ],
  providers: [StatusService, StatusResolverPostgres],
  exports: [StatusService]
})
export class StatusModule {}