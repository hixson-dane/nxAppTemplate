import { Router } from 'express';
import { z } from 'zod';
import { pingService } from './service';
import { PingRequest } from '@myOrg/models/api/request/ping-request';
import { PingResponse } from '@myOrg/models/api/response/ping-response';

const pingRequestSchema = z.object({}); // Adjust if PingRequest has fields

const router = Router();

router.get('/ping', (req, res) => {
  const parseResult = pingRequestSchema.safeParse(req.query);
  if (!parseResult.success) {
    return res.status(400).json({ error: 'Invalid request' });
  }
  const response: PingResponse = pingService();
  res.json(response);
});

export default router;
