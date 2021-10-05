import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { Employee } from 'src/employee/entities/employee.entity';

@ObjectType()
@Entity()
export class Project {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => Int)
  @Column()
  code: number;

  @OneToMany(() => Employee, (employee) => employee.project)
  @Field(() => [Employee], { nullable: true })
  // @Field(() => [Employee], { nullable: true })
  employees: Employee[];
}
