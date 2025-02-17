import 'reflect-metadata';
import express from 'express';
import {Request} from 'express';
import {Response} from 'express';
import bodyParser from 'body-parser';
import * as controllers from './controllers';
import {useExpressServer} from 'routing-controllers';
import {OADocumentBuilder} from '@e22m4u/ts-openapi';

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

const app = useExpressServer(server, {
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
