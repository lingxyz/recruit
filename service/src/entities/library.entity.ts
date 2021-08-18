import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Library {
  @PrimaryGeneratedColumn()
  id: number;
  // 姓名
  @Column()
  name: string;
  // 需求id
  @Column()
  hc_id: number;
  // 环节：0 新建 1 一轮 2 二轮 3 三轮 4 四轮 5 offer 6 入职 -1淘汰
  @Column({ default: 0 })
  process: number;
  // 录入日期
  @CreateDateColumn({comment: '创建时间' })
  createAt: Date;
}