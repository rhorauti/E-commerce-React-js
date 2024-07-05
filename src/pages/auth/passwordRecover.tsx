import { useState } from "react";
import { IRequestLogin } from "../../core/interfaces/IAuthUser";
import Input from "../../components/input";
import Button from "../../components/button";
import { Link } from "react-router-dom";
import ModalInfo from "../../components/modal-info";
import Loading from "../../components/loading";
import { authenticateUser } from "../../core/http/auth/userAuth";

export function PasswordRecover() {
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
            <p className="text-2xl font-bold">Recuperaçao de Senha</p>
          </div>
          <div className="mt-5 mb-3">
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
          </div>
          <p>
            O sistema irá enviar um link para o e-mail acima caso o mesmo esteja
            cadastrado.
          </p>
          <div className="mt-3">
            <Button
              emitClickEvent={loginUser}
              btnColor="blue"
              label="Enviar email de recuperação"
            />
            <p className="mt-4 text-center">
              Já tem conta?{" "}
              <Link to="/login" className="cursor-pointer font-bold">
                Acessar
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
