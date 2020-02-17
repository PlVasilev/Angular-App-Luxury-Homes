export interface IMessage {
    _id?: string;
    sendOn?: number;
    sendby?: string;
    subject: string;
    content: string;
  }