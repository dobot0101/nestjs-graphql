import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class UpdateProjectInput {
  @Field(() => Int)
  id: number;
  @Field()
  name: string;
  @Field(() => Int)
  code: number;
}
