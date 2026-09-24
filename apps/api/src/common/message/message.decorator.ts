import { SetMetadata } from '@nestjs/common';

export const Message = (msg: string) => SetMetadata('message', msg);
