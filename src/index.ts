import 'reflect-metadata';
import {createExpressServer} from 'routing-controllers';
import {OADocumentBuilder} from '@e22m4u/ts-openapi';
import * as controllers from './controllers';
import {Request, Response} from 'express';
import express from 'express';

const app = createExpressServer({
  controllers: Object.values(controllers),
});

app.get('/openapi.json', (req: Request, res: Response) => {
  const builder = new OADocumentBuilder({info: {title: 'My project'}});
  builder.useClassesMetadata(Object.values(controllers));
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(builder.build()));
});

app.use('/explorer', express.static('explorer'));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
