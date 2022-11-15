import { IsNotEmpty } from 'class-validator';

export class createTasksDTO {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
