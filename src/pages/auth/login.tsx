import Button from "../../components/button";
import Input from "../../components/input";
import Loading from "../../components/loading";
import ModalInfo from "../../components/modal-info";
import { IRequestLogin } from "../../core/interfaces/IAuthUser";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { authenticateUser } from "../../core/http/auth/userAuth";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoActive, setIsModaInfoActive] = useState(false);
  const [loginData, setloginData] = useState<IRequestLogin>({
    email: "",
    password: "",
  });
  const [iconType, setIconType] = useState("");
  const [modalMessage, setModalMessage] = useState("");

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

  return (
    <div>
      <div className="bg-standard-gray flex h-screen w-full justify-center overflow-auto p-7">
        <div className="m-auto flex w-full max-w-2xl flex-col justify-between rounded-lg bg-white p-7 shadow-2xl md:w-4/5 lg:w-3/5">
          <div>
            <p className="text-2xl font-bold">Bem-vindo!</p>
            <p className="mt-4">
              Logando ou criando uma conta, você concorda com os
              <span className="cursor-pointer font-bold"> Termos de Serviço</span> da aplicação
            </p>
          </div>
          <div className="mt-5 mb-4 space-y-4">
            <div>
              <p className="mb-2 font-semibold">E-mail</p>
              <Input
                icon="email"
                placeholder="exemplo@provedor.com"
                inputValue={(value) =>
                  setloginData((prevState) => ({ ...prevState, email: value }))
                }
              />
            </div>
            <div>
              <p className="mb-2 font-semibold">Senha</p>
              <Input
                icon="password"
                placeholder="***********"
                inputValue={(value) =>
                  setloginData((prevState) => ({
                    ...prevState,
                    password: value,
                  }))
                }
              />
            </div>
            <p className="text-center">
              Esqueceu a senha?{" "}
              <Link to="/password-recover" className="cursor-pointer font-bold">
                Clique aqui
              </Link>
            </p>
          </div>
          <div>
            <Button emitClickEvent={loginUser} btnColor="blue" label="Login com o e-mail" />
            <p className="my-3 text-center">OU</p>
            <div className="mt-3">
              <button className="flex w-full items-center justify-center rounded-lg border-2 border-gray-400 p-1 font-semibold hover:bg-gray-100">
                <img src={"/img/logo-google.webp"} width="25" alt="Logo do Google" />
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
        closeModalInfoEvent={() => setIsModaInfoActive(false)}
        iconType={iconType}
        description={modalMessage}
      />
      <Loading isLoading={isLoading} />
    </div>
  );
}

export default Login;
