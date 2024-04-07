import { MessageServerity } from '@shared/enums/message-severity.enum';
import { GraphQLError } from 'graphql';
import { Message } from 'primeng/api';

export function successMessage(
  title: string = 'Peticion enviada',
  description: string = 'Se ha enviado exitosamente'
): Message {
  return {
    severity: MessageServerity.SUCCESS,
    summary: title,
    detail: description,
  };
}


export function convertSingleError(title: string, description: string ) {
  return {
    severity: MessageServerity.ERROR,
    summary: title,
    detail: description,
  };
}


export function convertError(error: GraphQLError) {
  return {
    severity: MessageServerity.ERROR,
    summary: error.name,
    detail: error.message,
  };
}

export function convertAllErrors(
  errors: readonly GraphQLError[],
  title: string = 'Server Error'
): Message[] {
  return errors.map((error) => {
    return {
      severity: MessageServerity.ERROR,
      summary: title,
      detail: error.message,
    };
  });
}
