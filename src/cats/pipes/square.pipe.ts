import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class SquarePipe implements PipeTransform<number, number> {
  transform(value: number, metadata: ArgumentMetadata) {

    return value ** 2;
  }
}