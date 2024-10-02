export interface IRequestSignup {
  username: string;
  email: string;
  password: string;
  avatar?: string;
}

export interface IResponseSignup {
  date: string;
  status: boolean;
  message: string;
  data: {
    id: number;
    nome: string;
    email: string;
  };
}

export interface IRequestLogin {
  email: string;
  password: string;
}

export interface IResponseLogin {
  date: string;
  status: boolean;
  message: string;
  data: {
    id: number;
    email: string;
  };
}
