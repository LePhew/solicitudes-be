import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class EventsGateway {

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('solicitud-creada')
  handleMessage(@MessageBody() data: any) {
    return { creada: "true" }
  }
}
