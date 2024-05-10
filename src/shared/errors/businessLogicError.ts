export function BusinessLogicException(message: string, type: number) {
    this.message = message;
    this.type = type;
  }
  
  export enum BusinessLogicError {
    NOT_FOUND,
    PRECONDITION_FAILED,
    BAD_REQUEST
  }