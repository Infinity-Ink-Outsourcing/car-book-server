declare namespace Express {
    export interface Request {
       user?: string |JwtPayload
       token?: string
    }
}

declare module 'node-datetime';
declare module 'libp2p-mplex';
declare module 'libp2p-pubsub-peer-discovery';
declare module 'libp2p-websockets';