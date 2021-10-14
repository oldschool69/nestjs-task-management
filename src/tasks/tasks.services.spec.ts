import { Test } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { TasksRepository } from './tasks.repository';
import { TaskStatus } from './task-status.enum';
import { NotFoundException } from '@nestjs/common';

const mockTasksRepository = () => ({
  getTasks: jest.fn(),
  findOne: jest.fn(),
});

const mockUser = {
  username: 'user1',
  id: 'someId',
  password: 'somePassword',
  tasks: [],
};

describe('TaskService', () => {
  let taskService: TasksService;
  let tasksRepository;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        TasksService,
        { provide: TasksRepository, useFactory: mockTasksRepository },
      ],
    }).compile();

    taskService = module.get(TasksService);
    tasksRepository = module.get(TasksRepository);
  });

  describe('getTasks', () => {
    it('calls TaskRepository.getTasks and returns the result', async () => {
      tasksRepository.getTasks.mockResolvedValue('someValue');
      const result = await taskService.getTasks(null, mockUser);
      expect(result).toEqual('someValue');
    });
  });

  describe('getTaskById', () => {
    it('calls TaskRepository.findOne and returns the result', async () => {
      const mockTask = {
        title: 'Test title',
        description: 'Test desc',
        id: 'someId',
        status: TaskStatus.OPEN,
      };

      tasksRepository.findOne.mockResolvedValue(mockTask);
      const result = await taskService.getTaskById('someId', mockUser);
      expect(result).toEqual(mockTask);
    });

    it('calls TaskRepository.findOne and returns the result', async () => {
      tasksRepository.findOne.mockResolvedValue(null);
      await expect(taskService.getTaskById('someId', mockUser)).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
