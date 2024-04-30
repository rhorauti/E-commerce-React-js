import Button from "../components/button";
import Input from "../components/input";
import Loading from "../components/loading";
import ModalInfo from "../components/modal-info";
// import { httpRequest } from "../shared/utils/httpRequest";
// import HttpMethodType from "../shared/enums/httpMethod";
import { IRequestSignup } from "../shared/interfaces/ISignup";
import { useState } from "react";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoActive, setIsModaInfoActive] = useState(false);
  const [signupData, setSignupData] = useState<IRequestSignup>({
    name: "",
    email: "",
    password: "",
  });

  function closeModalInfo(): void {
    setIsModaInfoActive(false);
  }

  function registerNewUser(): void {
    // httpRequest('/user/signup', HttpMethodType.POST, setSignupData);
    setIsModaInfoActive(true);
  }

  function getName(inputValue: string) {
    setSignupData((prevState) => ({ ...prevState, name: inputValue }));
  }

  function getEmail(inputValue: string) {
    setSignupData((prevState) => ({ ...prevState, email: inputValue }));
  }

  function getPassword(inputValue: string) {
    setSignupData((prevState) => ({ ...prevState, password: inputValue }));
  }

  return (
    <div>
      <div className="bg-standard-gray flex h-screen w-full justify-center overflow-auto p-7">
        <div className="m-auto flex w-full max-w-2xl flex-col justify-between rounded-lg bg-white p-7 shadow-2xl md:w-4/5 lg:w-3/5">
          <div>
            <p className="text-2xl font-bold">Bem-vindo!</p>
            <p className="mt-4">
              Logando ou criando uma conta, você concorda com os
              <span className="cursor-pointer font-bold">
                {" "}
                Termos de Serviço
              </span>{" "}
              da aplicação
            </p>
          </div>
          <div className="my-5 space-y-4">
            <div>
              <p className="mb-2 font-semibold">Nome</p>
              <Input icon="name" inputValue={getName} />
            </div>
            <div>
              <p className="mb-2 font-semibold">E-mail</p>
              <Input
                icon="email"
                placeholder="exemplo@provedor.com"
                inputValue={getEmail}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold">Senha</p>
              <Input
                validationType="password"
                icon="password"
                placeholder="***********"
                inputValue={getPassword}
              />
            </div>
          </div>
          <div>
            <Button
              emitClickEvent={registerNewUser}
              btnColor="blue"
              label="Cadastrar com o e-mail"
            />
            <p className="my-3 text-center">OU</p>
            <div>
              <button className="flex w-full items-center justify-center rounded-lg border-2 border-gray-400 p-1 font-semibold hover:bg-gray-100">
                <img
                  src={"/img/logo-google.webp"}
                  width="25"
                  alt="Logo do Google"
                />
                <span className="ml-3">Registre-se com o Google</span>
              </button>
            </div>
            <p className="mt-3 text-center">
              Já tem conta?{" "}
              <span className="cursor-pointer font-bold">Acessar</span>
            </p>
          </div>
        </div>
      </div>
      <ModalInfo
        isModalInfoActive={isModalInfoActive}
        closeModalInfoEvent={closeModalInfo}
        iconType="success"
        description="Usuário cadastrado com sucesso!"
      />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default Signup;
