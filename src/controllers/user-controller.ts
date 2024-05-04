import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from 'routing-controllers';
import {
  OADataType,
  OAMediaType,
  OAOperation,
  OAOperationMethod,
  OAParameter,
  OAParameterLocation,
  OARequestBody,
  OAResponse,
  OASchemaObject,
  OATag
} from '@e22m4u/ts-openapi';
import createHttpError from 'http-errors';

const USER_SCHEMA: OASchemaObject = {
  type: OADataType.OBJECT,
  properties: {
    id: {type: OADataType.NUMBER},
    name: {type: OADataType.STRING},
    roleId: {type: OADataType.NUMBER},
  }
};

@OATag()
@Controller()
export class UserController {
  @OAOperation({
    method: OAOperationMethod.POST,
    path: '/users',
  })
  @OAResponse({
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
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.GET,
    path: '/users/{id}',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Get('/users/:id')
  findById(
    @OAParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number
  ) {
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.POST,
    path: '/users',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Post('/users')
  create(
    @OARequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: USER_SCHEMA,
    })
    @Body()
    user: object,
  ) {
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.PATCH,
    path: '/users/{id}',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: USER_SCHEMA,
  })
  @Patch('/users/:id')
  updateById(
    @OAParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number,
    @OARequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: USER_SCHEMA,
    })
    @Body()
    user: object,
  ) {
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.DELETE,
    path: '/users/{id}',
  })
  @OAResponse({
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
    @OAParameter({
      name: 'id',
      in: OAParameterLocation.PATH,
      schema: {type: OADataType.NUMBER},
    })
    @Param('id')
    id: number,
  ) {
    throw createHttpError.NotImplemented();
  }
}
