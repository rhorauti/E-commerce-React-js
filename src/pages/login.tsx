import Button from "../components/button";
import Input from "../components/input";
import Loading from "../components/loading";
import ModalInfo from "../components/modal-info";
import { IRequestLogin } from "../shared/interfaces/IAuthUser";
import { useEffect, useState } from "react";
import { authenticateUser } from "../shared/utils/userAuth/userAuth";
import { Link } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoActive, setIsModaInfoActive] = useState(false);
  const [loginData, setloginData] = useState<IRequestLogin>({
    email: "",
    password: "",
  });
  const [isEmailOk, setIsEmailOk] = useState(false);
  const [isPasswordOk, setIsPasswordOk] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [iconType, setIconType] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  function closeModalInfo(): void {
    setIsModaInfoActive(false);
  }

  async function loginUser() {
    setIsLoading(true);
    try {
      const response = await authenticateUser(loginData);
      if (response.status) {
        setIconType("success");
      } else {
        setIconType("fail");
      }
      setModalMessage(response.message);
      setIsModaInfoActive(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function getEmail(inputValue: string): void {
    setloginData((prevState) => ({ ...prevState, email: inputValue }));
  }

  function getPassword(inputValue: string): void {
    setloginData((prevState) => ({ ...prevState, password: inputValue }));
  }

  function getEmailOk(isEmailOk: boolean): void {
    setIsEmailOk(isEmailOk);
  }

  function getPasswordOk(isPasswordOk: boolean): void {
    setIsPasswordOk(isPasswordOk);
  }

  useEffect(() => {
    if (isEmailOk && isPasswordOk) {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [isEmailOk, isPasswordOk]);

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
              <p className="mb-2 font-semibold">E-mail</p>
              <Input
                icon="email"
                placeholder="exemplo@provedor.com"
                inputValue={getEmail}
                emailOk={getEmailOk}
              />
            </div>
            <div>
              <p className="mb-2 font-semibold">Senha</p>
              <Input
                icon="password"
                placeholder="***********"
                inputValue={getPassword}
              />
            </div>
          </div>
          <div className="mt-3">
            <Button
              emitClickEvent={loginUser}
              btnColor="blue"
              label="Login com o e-mail"
            />
            <p className="my-3 text-center">OU</p>
            <div className="mt-3">
              <button className="flex w-full items-center justify-center rounded-lg border-2 border-gray-400 p-1 font-semibold hover:bg-gray-100">
                <img
                  src={"/img/logo-google.webp"}
                  width="25"
                  alt="Logo do Google"
                />
                <span className="ml-3">Acessar com o Google</span>
              </button>
            </div>
            <p className="mt-4 text-center">
              Não tem conta?{" "}
              <Link to="/signup" className="cursor-pointer font-bold">
                Crie uma nova conta
              </Link>
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

export default Login;
