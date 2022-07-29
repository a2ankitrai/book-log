import { Injectable } from "@nestjs/common";
import { CreateCatDto } from "./dto/create-cat.dto";

@Injectable()
export class CatsService {

  async create(catCreateDto: CreateCatDto): Promise<void> {
    console.log(catCreateDto);
    console.log('cat created');
  }

}