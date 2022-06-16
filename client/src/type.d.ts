interface IClient {
  id: string;
  name: string;
  email: string;
  phone: string;
};

interface IProject {
  id: string;
  name: string;
  status: string;
  description: string;
};

interface IClients {
  clients: IClient[];
};

type ClientRowProps = {
  client: IClient;
  idx: number;
};

type ClientInfoProps = {
  client: IClient;
};

type ProjectRowProps = {
  project: IProject;
  idx: number;
};
type DeleteProjectButtonProps = {
  projectId: string;
};
