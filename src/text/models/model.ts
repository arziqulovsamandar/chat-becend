import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface UserAttr {
  id: number;
  sender: string;
  content: string;
}

@Table({ tableName: 'messages' })
export class Message extends Model<Message, UserAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  sender: string;

  @Column({
    type: DataType.STRING,
  })
  content: string;
}
