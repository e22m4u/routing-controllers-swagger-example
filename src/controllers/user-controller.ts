import {
  Get,
  Body,
  Post,
  Patch,
  Param,
  Delete,
  Controller,
} from 'routing-controllers';
import {
  oaTag,
  oaResponse,
  oaOperation,
  oaParameter,
  oaRequestBody,
  OADataType,
  OAMediaType,
  OASchemaObject,
  OAOperationMethod,
  OAParameterLocation,
} from '@e22m4u/ts-openapi';

type User = {
  id?: number;
  name?: string;
  roleId?: number;
}

const USER_SCHEMA: OASchemaObject = {
  type: OADataType.OBJECT,
  properties: {
    id: {type: OADataType.NUMBER},
    name: {type: OADataType.STRING},
    roleId: {type: OADataType.NUMBER},
  }
};

@oaTag()
@Controller()
export class UserController {
  @oaOperation({
    method: OAOperationMethod.GET,
    path: '/users',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: {
      type: OADataType.ARRAY,
      items: USER_SCHEMA,
    },
  })
  @Get('/users')
  find() {
    return [
      {id: 1, name: 'John Doe', roleId: 3},
      {id: 2, name: 'Mario Rossi', roleId: 2},
      {id: 3, name: 'Richard Roe', roleId: 1},
    ];
  }

  @oaOperation({
    method: OAOperationMethod.GET,
    path: '/users/{id}',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Get('/users/:id')
  findById(
    @oaParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number
  ) {
    return {id, name: 'John Doe', roleId: 3};
  }

  @oaOperation({
    method: OAOperationMethod.POST,
    path: '/users',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Post('/users')
  create(
    @oaRequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: USER_SCHEMA,
    })
    @Body()
    user: User,
  ) {
    return user;
  }

  @oaOperation({
    method: OAOperationMethod.PATCH,
    path: '/users/{id}',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Patch('/users/:id')
  updateById(
    @oaParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number,
    @oaRequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: USER_SCHEMA,
    })
    @Body()
    user: User,
  ) {
    delete user.id;
    return {id, ...user};
  }

  @oaOperation({
    method: OAOperationMethod.DELETE,
    path: '/users/{id}',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: {
      type: OADataType.OBJECT,
      properties: {
        count: {type: OADataType.NUMBER},
      },
    },
  })
  @Delete('/users/:id')
  remove(
    @oaParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number,
  ) {
    return {count: 1};
  }
}
