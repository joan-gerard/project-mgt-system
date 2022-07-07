interface IClient {
  company: string;
  id: string;
  name: string;
  email: string;
  phone: string;
}

interface IProject {
  id: string;
  name: string;
  status: string;
  description: string;
  completionDate: string;
}

interface ITask {
  _id: any;
  id: string;
  projectId: string;
  name: string;
  start: string;
  end: string;
  progress: number;
  dependencies: string;
}

interface IClients {
  clients: IClient[];
}

type ClientRowProps = {
  client: IClient;
  idx: number;
};

type ClientInfoProps = {
  client: IClient;
};

type ProjectRowProps = {
  project: IProject;
};
type DeleteProjectButtonProps = {
  projectId: string;
};

type ConfirmDialogProps = {
  title: string;
  open: boolean;
  setOpen: (a: boolean) => void;
  children: string;
  onConfirm: () => void;
};

type EditProjectFormProps = {
  project: IProject;
  setNeedsUpdate: (a: boolean) => void;
};

type WBSProps = {
  id: string | undefined;
  loading: boolean;
  error: undefined;
};

type AddTaskFormProps = {
  id: string | undefined;
};

type DeleteTaskButtonProps = {
  _id: string | undefined;
};

type DropdownButtonProps = {
  id: string | undefined;
};

type ProjectActionDropdownProps = {
  projectId: string;
  setNeedsUpdate: (a: boolean) => void
}

type ProjectMenuProps = {
  setNav: (a: string) => void
}