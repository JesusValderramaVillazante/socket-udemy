import { Socket } from 'socket.io';


export const desconectar = (cliente: Socket) => {
    cliente.on('diconnect', () => {
        console.log('Cliente desconectado');
    })
}


export const mensaje = (cliente: Socket, io: SocketIO.Server) => {
    cliente.on('mensaje', (payload: { de: string, cuerpo: string }) => {
        console.log('mensaje recibido', payload);

        io.emit('mensaje-nuevo', payload);
    })
}