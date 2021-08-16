import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Headcount {
  @PrimaryGeneratedColumn()
  id: number;
  // 岗位名称
  @Column()
  post: string;
  // 职级
  @Column()
  level: string;
  // 是否招聘中
  @Column({ default: true })
  isActive: boolean;
}