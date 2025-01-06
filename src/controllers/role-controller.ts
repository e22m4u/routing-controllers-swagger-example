import {
  Get,
  Body,
  Post,
  Param,
  Patch,
  Delete,
  Controller,
} from 'routing-controllers';
import {
  oaTag,
  oaResponse,
  oaParameter,
  oaOperation,
  oaRequestBody,
  OADataType,
  OAMediaType,
  OASchemaObject,
  OAOperationMethod,
  OAParameterLocation,
} from '@e22m4u/ts-openapi';

type Role = {
  id?: number;
  name?: string;
  roleId?: number;
}

const ROLE_SCHEMA: OASchemaObject = {
  type: OADataType.OBJECT,
  properties: {
    id: {type: OADataType.NUMBER},
    name: {type: OADataType.STRING},
  }
};

@oaTag()
@Controller()
export class RoleController {
  @oaOperation({
    method: OAOperationMethod.GET,
    path: '/roles',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: {
      type: OADataType.ARRAY,
      items: ROLE_SCHEMA,
    },
  })
  @Get('/roles')
  find() {
    return [
      {id: 1, name: 'admin'},
      {id: 2, name: 'manager'},
      {id: 3, name: 'user'},
    ];
  }

  @oaOperation({
    method: OAOperationMethod.GET,
    path: '/roles/{id}',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Get('/roles/:id')
  findById(
    @oaParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number
  ) {
    return {id, name: 'user'};
  }

  @oaOperation({
    method: OAOperationMethod.POST,
    path: '/roles',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Post('/roles')
  create(
    @oaRequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: ROLE_SCHEMA,
    })
    @Body()
    role: Role,
  ) {
    return role;
  }

  @oaOperation({
    method: OAOperationMethod.PATCH,
    path: '/roles/{id}',
  })
  @oaResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Patch('/roles/:id')
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
      schema: ROLE_SCHEMA,
    })
    @Body()
    role: Role,
  ) {
    delete role.id;
    return {id, ...role};
  }

  @oaOperation({
    method: OAOperationMethod.DELETE,
    path: '/roles/{id}',
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
  @Delete('/roles/:id')
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
