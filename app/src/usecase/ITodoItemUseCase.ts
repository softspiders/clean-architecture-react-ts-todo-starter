import { TodoItem } from '../entity/TodoItem'

export interface ITodoItemUseCase {
  findAll(): Promise<TodoItem[] | null>
  findByID(id: number): Promise<TodoItem | null>
  create(title: string): Promise<void>
  update(id: number): Promise<void>
  delete(id: number): Promise<void>
}
