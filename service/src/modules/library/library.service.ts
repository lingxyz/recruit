import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Library } from '../../entities/library.entity';
import { Headcount } from '../../entities/headcount.entity';
import { CreateLibraryDto } from './create-library.dto'

@Injectable()
export class LibraryService {
  constructor(
    @InjectRepository(Library)
    private libraryRepository: Repository<Library>
  ) {}
  // 获取候选人列表
  getLibrary(): Promise<Library[]> {
    return this.libraryRepository.createQueryBuilder()
      .leftJoinAndSelect(Headcount, 'headcount', 'headcount.id = library.hc_id')
      .select(`
        library.createAt as createAt,
        library.hc_id as hc_id,
        library.id as id,
        library.name as name,
        library.process as process,
        headcount.head as head,
        headcount.level as level,
        headcount.post as post,
        headcount.priority as priority,
        headcount.project as project,
        headcount.reason as reason
      `)
      .getRawMany();
  }
  // 保存/修改1条需求
  async saveLibrary(createLibraryDto: CreateLibraryDto) {
    const library = new Library();
    library.name = createLibraryDto.name;
    library.hc_id = createLibraryDto.hc_id;
    library.process = createLibraryDto.process;
    try {
      if (createLibraryDto.id) {
        await this.libraryRepository.update(createLibraryDto.id, library)
        return '修改成功';
      } else {
        await this.libraryRepository.save(library);
        return '保存成功';
      }
    } catch (error) {
      // throw new httpException: todo
    }
  }

  // 删除1条需求
  async deleteLibrary(createLibraryDto: CreateLibraryDto) {
    const library = new Library();
    library.id = createLibraryDto.id;
    try {
        await this.libraryRepository.delete(library)
        return '删除成功';
    } catch (error) {
      // throw new httpException: todo
    }
  }
}
