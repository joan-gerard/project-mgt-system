
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
  setNeedsUpdate: (a: boolean) => void
}