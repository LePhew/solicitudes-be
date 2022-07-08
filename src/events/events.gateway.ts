import { SubscribeMessage, WebSocketGateway, WebSocketServer, MessageBody, OnGatewayConnection, ConnectedSocket } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { map } from 'rxjs';
@WebSocketGateway({
  cors: {
    origin: '*'
  }
})
export class EventsGateway implements OnGatewayConnection {

  @WebSocketServer() server: Server;
  webSockets: any[] = [];

  handleConnection(@ConnectedSocket() client: Socket) {
    console.log('someone connected:', client.id);
    this.addClientToArray(client);
  }

  addClientToArray(client: any) {
    this.webSockets.push(client);
    console.log('Total clients connected: ', this.webSockets.length);
  }

  @SubscribeMessage('solicitud-creada')
  handleMessage(@MessageBody() data: any) {
    this.server.emit('nueva-solicitud');
  }

  @SubscribeMessage('get-all-clients')
  sendAllClients() {
    return this.webSockets;
  }
}
