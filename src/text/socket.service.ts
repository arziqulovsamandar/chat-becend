// message.service.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Message } from './models/model'; 
import { MessageDto } from './dto/socket.dto';

@Injectable()
export class MessageService {
  constructor(@InjectModel(Message) private messageModel: typeof Message) {}

  async saveMessage(messageDto: MessageDto): Promise<Message> {
    return this.messageModel.create(messageDto);
  }

  async getAllMessages(): Promise<Message[]> {
    return this.messageModel.findAll();
  }
}
