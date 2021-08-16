import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Headcount } from '../../entities/headcount.entity';


@Injectable()
export class HeadcountService {
  constructor(
    @InjectRepository(Headcount)
    private headcountRepository: Repository<Headcount>
  ) {}
  // 获取招聘需求列表
  getHeadcount(): Promise<Headcount[]> {
    return this.headcountRepository.find();
  }
}
