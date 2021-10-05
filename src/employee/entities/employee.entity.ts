import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Project } from 'src/project/entities/project.entity';

@ObjectType()
@Entity()
export class Employee {
  // @Field()
  // @PrimaryGeneratedColumn('uuid')
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  firstName: string;

  @Field()
  @Column()
  lastName: string;

  @Field()
  @Column()
  designation: string;

  // @Field({ nullable: true })
  // @Column({ nullable: true })
  @Field()
  @Column()
  city: string;

  @ManyToOne(() => Project, (project) => project.employees)
  @Field(() => Project, { nullable: true })
  // @JoinColumn({ name: 'projectId' })
  project: Project;

  // @Column({ nullable: true })
  // @Field({ nullable: true })
  @Column()
  @Field()
  projectId: number;
}
