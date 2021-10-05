import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class EmployeeUpdateDto {
  @Field(() => Int)
  id: number;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field({ nullable: true })
  designation: string;
  @Field({ nullable: true })
  city: string;
  @Field(() => Int, { nullable: true })
  projectId: number;
}
