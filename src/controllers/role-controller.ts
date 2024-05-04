import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Patch,
} from 'routing-controllers';
import {
  OATag,
  OAOperation,
  OAOperationMethod,
  OAResponse,
  OAMediaType,
  OADataType,
  OASchemaObject,
  OAParameterLocation,
  OAParameter,
  OARequestBody
} from '@e22m4u/ts-openapi';
import createHttpError from 'http-errors';

const ROLE_SCHEMA: OASchemaObject = {
  type: OADataType.OBJECT,
  properties: {
    id: {type: OADataType.NUMBER},
    name: {type: OADataType.STRING},
  }
};

@OATag()
@Controller()
export class RoleController {
  @OAOperation({
    method: OAOperationMethod.POST,
    path: '/roles',
  })
  @OAResponse({
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
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.GET,
    path: '/roles/{id}',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Get('/roles/:id')
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
    path: '/roles',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Post('/roles')
  create(
    @OARequestBody({
      mediaType: OAMediaType.APPLICATION_JSON,
      schema: ROLE_SCHEMA,
    })
    @Body()
    role: object,
  ) {
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.PATCH,
    path: '/roles/{id}',
  })
  @OAResponse({
    statusCode: 200,
    mediaType: OAMediaType.APPLICATION_JSON,
    description: 'Response example',
    schema: ROLE_SCHEMA,
  })
  @Patch('/roles/:id')
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
      schema: ROLE_SCHEMA,
    })
    @Body()
    role: object,
  ) {
    throw createHttpError.NotImplemented();
  }

  @OAOperation({
    method: OAOperationMethod.DELETE,
    path: '/roles/{id}',
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
  @Delete('/roles/:id')
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
