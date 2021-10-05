import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeCreateDto } from './dto/create-employee.input';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeUpdateDto } from './dto/update-employee.input';

@Resolver(() => Employee)
export class EmployeeResolver {
  constructor(private employeeService: EmployeeService) {}

  @Query(() => [Employee], { name: 'getAllEmployees' })
  findAll() {
    return this.employeeService.findAll();
  }

  @Query(() => Employee, { name: 'getEmployee' })
  findOne(@Args('id') id: string) {
    return this.employeeService.findOne(id);
  }

  @Mutation(() => Employee, { name: 'createEmployee' })
  create(@Args('employeeInput') employee: EmployeeCreateDto) {
    return this.employeeService.create(employee);
  }

  @Mutation(() => Employee)
  updateEmployee(@Args('employee') employee: EmployeeUpdateDto) {
    // return this.employeeService.update(employee.id, employee);
    return this.employeeService.update(employee);
  }

  @ResolveField(() => Project)
  project(@Parent() employee: Employee) {
    // return this.employeeService.getProject(employee.projectId);
    return this.employeeService.getProject(employee.project?.id);
  }
}
