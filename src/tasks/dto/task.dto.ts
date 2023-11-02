import { TaskStatus } from '../tasks.entity';
import { IsString, IsNotEmpty, MinLength, IsIn } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string;
  description: string;
}

export class UpdateTaskDto {
  @IsString()
  title?: string;
  description?: string;
  @IsIn([TaskStatus.PENDING, TaskStatus.IN_PROGRESS, TaskStatus.DONE])
  status?: TaskStatus;
}
