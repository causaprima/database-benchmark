import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { config } from "./config/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./config/typeorm.config";
import { PostgresModule } from "./postgres/postgres.module";
import { MongoModule } from "./mongo/mongo.module";
import { MongooseModule } from "@nestjs/mongoose";
import { GraphQLModule } from "@nestjs/graphql";
import { join } from "path";

@Module({
  imports: [
    PostgresModule,
    MongoModule,
    ConfigModule.forRoot(config),
    TypeOrmModule.forRootAsync(typeOrmConfig),
    MongooseModule.forRoot('mongodb://localhost/database-benchmark-mongo'),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'schema.gql'),
      playground: true,
      introspection: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
