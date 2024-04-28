export interface IRequestSignup {
  name: string;
  email: string;
  password: string;
}

export interface IResponseSignup {
  message: string;
  data: {
    id: number;
    email: string;
  };
}
