import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './entities/employee.entity';
import { Repository, createQueryBuilder } from 'typeorm';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { ProjectService } from 'src/project/project.service';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeUpdateDto } from './dto/update-employee.input';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
    private projectService: ProjectService,
  ) {}

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find({ relations: ['project'] });
  }

  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne(id);
  }

  async create(employee: EmployeeCreateDto): Promise<Employee> {
    const emp = this.employeeRepository.create(employee);
    return this.employeeRepository.save(emp);
  }

  async getProject(id: number): Promise<Project> {
    return this.projectService.findOne(id);
  }

  async update(employeeUpdateDto: EmployeeUpdateDto) {
    return await this.employeeRepository.save(employeeUpdateDto);
  }
}
