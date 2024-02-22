import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region1 } from './soz/models/region.model';
import { User } from './user/models/user.model';
import { RegionModule } from './soz/region.module';
import { UserModule } from './user/user.module';
import { SocketModule } from './text/socket.module';
import { Message } from './text/models/model';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),

      database: process.env.POSTGRES_DB,
      models: [Region1, User,Message],
      autoLoadModels: true,
      logging: false,
    }),
    RegionModule,
    UserModule,
    SocketModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
