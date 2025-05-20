import { PingResponse } from '@myOrg/models/api/response/ping-response';

export function pingService(): PingResponse {
  return {
    message: 'pong',
    timestamp: Date.now(),
  };
}
