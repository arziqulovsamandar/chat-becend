import { Controller } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import { MessageDto } from './dto/socket.dto';
import { MessageService } from './socket.service';

@Controller('user')
@WebSocketGateway()
export class SocketController {
  @WebSocketServer()
  server: Server;

  constructor(private readonly messageService: MessageService) {}

  @SubscribeMessage('message')
  async handleMessage(@MessageBody() messageDto: MessageDto): Promise<void> {
    const savedMessage = await this.messageService.saveMessage(messageDto);
    this.server.emit('message', savedMessage);
  }

  @SubscribeMessage('getAllMessages')
  async handleGetAllMessages(): Promise<void> {
    const messages = await this.messageService.getAllMessages();
    this.server.emit('allMessages', messages);
  }
}
