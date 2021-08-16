import { Controller, Get } from '@nestjs/common';
import { HeadcountService } from './headcount.service';

@Controller('headcount')
export class HeadcountController {
  constructor(private readonly headcountService: HeadcountService) {}

  @Get()
  getHeadcount() {
    return this.headcountService.getHeadcount();
  }

}
