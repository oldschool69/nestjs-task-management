//data object definition
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

//export to make it visible to another models
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}
