export interface State {
  profile: undefined;
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

export interface IRoles {
  role: any;
  open: any;
  setOpen: any;
}