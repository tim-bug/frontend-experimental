export interface State {
  id?: string;
}

export interface Item {
  id: string;
  title: any;
  priority: number;
  chat: number;
  attachment: number;
  assignees: never[];
}
