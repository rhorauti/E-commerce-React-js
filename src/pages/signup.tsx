import Button from "../components/button";
import Input from "../components/input";
import Loading from "../components/loading";
import ModalInfo from "../components/modal-info";
import { IRequestSignup } from "../shared/interfaces/ISignup";
import { useEffect, useState } from "react";
import { createUser } from "../shared/utils/userAuth/userAuth";

function Signup() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoActive, setIsModaInfoActive] = useState(false);
  const [signupData, setSignupData] = useState<IRequestSignup>({
    userName: "",
    email: "",
    password: "",
  });
  const [isNameOk, setIsNameOk] = useState(false);
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [iconType, setIconType] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  function closeModalInfo(): void {
    setIsModaInfoActive(false);
  }

  async function registerNewUser(): Promise<void> {
    setIsLoading(true);
    try {
      const response = await createUser(signupData);
      if (response.status) {
        console.log(response);
        setModalMessage("Usuário criado com sucesso!");
        setIconType("success");
        setIsModaInfoActive(true);
      } else {
        setModalMessage("Erro ao criar o usuário!");
        setIconType("fail");
        setIsModaInfoActive(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getName(inputValue: string): void {
    setSignupData((prevState) => ({ ...prevState, name: inputValue }));
  }

  function getEmail(inputValue: string): void {
    setSignupData((prevState) => ({ ...prevState, email: inputValue }));
  }

  function getPassword(inputValue: string): void {
    setSignupData((prevState) => ({ ...prevState, password: inputValue }));
  }

  function getNameOk(isNameOk: boolean): void {
    setIsNameOk(isNameOk);
  }

  function getEmailOk(isEmailOk: boolean): void {
    setIsEmailOk(isEmailOk);
  }

  function getPasswordOk(isPasswordOk: boolean): void {
    setIsPasswordOk(isPasswordOk);
  }

  useEffect(() => {
    if (isNameOk && isEmailOk && isPasswordOk) {
      console.log(isNameOk, isEmailOk, isPasswordOk);
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [isNameOk, isEmailOk, isPasswordOk]);

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
              <Input
                validationType="name"
                icon="name"
                inputValue={getName}
                nameOk={getNameOk}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold">E-mail</p>
              <Input
                validationType="email"
                icon="email"
                placeholder="exemplo@provedor.com"
                inputValue={getEmail}
                emailOk={getEmailOk}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold">Senha</p>
              <Input
                validationType="password"
                icon="password"
                placeholder="***********"
                inputValue={getPassword}
                passwordOk={getPasswordOk}
              />
            </div>
          </div>
          <div>
            <Button
              emitClickEvent={registerNewUser}
              btnColor="blue"
              btnIsDisabled={isBtnDisabled}
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
        iconType={iconType}
        description={modalMessage}
      />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default Signup;
