export interface IRestClient {
  getAllTodoItems(): Promise<Response | undefined>
  getTodoItemByID(id: number): Promise<Response | undefined>
  createTodoItem(title: string): Promise<Response | undefined>
  updateTodoItemByID(
    id: number,
    title: string,
    isCompleted: boolean
  ): Promise<Response | undefined>
  deleteTodoItemByID(id: number): Promise<Response | undefined>
}
