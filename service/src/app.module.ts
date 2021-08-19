import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Headcount } from './entities/headcount.entity';
import { HeadcountModule } from './modules/headcount/headcount.module';
import { LibraryModule } from './modules/library/library.module';
import { ProcessModule } from './modules/process/process.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'zl000000',
      database: 'recruit',
      // entities: [Headcount],
      autoLoadEntities: true,
      // entities: ["dist/**/*.entity{.ts,.js}"],
      synchronize: true,
      logging: true
    }),
    HeadcountModule,
    LibraryModule,
    ProcessModule,
  ],
})
export class AppModule {}
