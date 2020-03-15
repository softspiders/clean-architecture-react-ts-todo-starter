import { TodoItem } from '../entity/TodoItem'
import { ITodoItemUseCase } from './ITodoItemUseCase'
import { IRestClient } from '../adapter/IRestClient'

export class TodoItemUseCase implements ITodoItemUseCase {
  client: IRestClient

  constructor(client: IRestClient) {
    this.client = client
  }

  async findAll(): Promise<TodoItem[] | null> {
    const todos: any = await this.client.getAllTodoItems()

    const items = []

    for (const todo of todos) {
      items.push(TodoItem.fromJSON(todo))
    }

    return items
  }

  async findByID(id: number): Promise<TodoItem | null> {
    const todo: any = await this.client.getTodoItemByID(id)
    return TodoItem.fromJSON(todo)
  }

  async create(title: string): Promise<void> {
    await this.client.createTodoItem(title)
  }

  async update(id: number): Promise<void> {
    const item = await this.findByID(id)

    if (item) {
      await this.client.updateTodoItemByID(id, item.title, !item.isCompleted)
    }
  }

  async delete(id: number): Promise<void> {
    await this.client.deleteTodoItemByID(id)
  }
}
