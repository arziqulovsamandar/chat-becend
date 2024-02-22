// socket.module.ts
import { Module } from '@nestjs/common';
import { SocketController } from './socket.controller';
import { Message } from './models/model';
import { MessageService } from './socket.service';
import { SequelizeModule } from '@nestjs/sequelize';


@Module({
  imports: [SequelizeModule.forFeature([Message])],
  controllers: [SocketController],
  providers: [MessageService],
  exports: [MessageService]
})
export class SocketModule {}
