import { TaskStatus } from '../task.model';
export class GetFilterTaskDTO {
  status?: TaskStatus;
  search?: string;
}
