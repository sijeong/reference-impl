import { Todo } from "TodoModels";

let todos: Todo[] = [{ id: "0", title: "default" }];

export function loadSnapshot(): Promise<Todo[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(todos);
    }, 500);
  });
}

export function saveSnapshot(data: Todo[]): Promise<undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos = data;
      resolve();
    }, 500);
  });
}
