import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { Repository, DeleteResult } from 'typeorm';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(Project) private projectRepository: Repository<Project>,
  ) {}
  create(createProjectInput: CreateProjectInput): Promise<Project> {
    const project = this.projectRepository.create(createProjectInput);
    return this.projectRepository.save(project);
  }

  async findAll(): Promise<Project[]> {
    return this.projectRepository.find();
  }

  async findOne(id: number): Promise<Project> {
    return this.projectRepository.findOne(id);
  }

  async update(
    id: number,
    updateProjectInput: UpdateProjectInput,
  ): Promise<Project> {
    const project = this.projectRepository.create(updateProjectInput);
    project.id = id;
    return await this.projectRepository.save(project);
  }

  async remove(id: number): Promise<DeleteResult> {
    return await this.projectRepository.delete(id);
  }
}
