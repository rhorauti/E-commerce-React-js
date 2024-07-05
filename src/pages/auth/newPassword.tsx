import Button from "../../components/button";
import Input from "../../components/input";
import Loading from "../../components/loading";
import ModalInfo from "../../components/modal-info";
import { useEffect, useState } from "react";
import { updateUserPassword } from "../../core/http/auth/userAuth";
import { Link } from "react-router-dom";

function NewPassword() {
  const [isLoading, setIsLoading] = useState(false);
  const [isModalInfoActive, setIsModaInfoActive] = useState(false);
  const [newPassword, setNewPassword] = useState<string>("");
  const [isPasswordOk, setIsPasswordOk] = useState(false);
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const [iconType, setIconType] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  async function updatePassword(): Promise<void> {
    setIsLoading(true);
    try {
      const response = await updateUserPassword(newPassword);
      if (response.status) {
        setIconType("success");
      } else {
        setIconType("fail");
      }
      setModalMessage(response.message);
      setIconType("success");
      setIsModaInfoActive(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    isPasswordOk ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
  }, [isPasswordOk]);

  return (
    <div>
      <div className="bg-standard-gray flex h-screen w-full justify-center overflow-auto p-7">
        <div className="m-auto flex w-full max-w-2xl flex-col justify-between rounded-lg bg-white p-7 shadow-2xl md:w-4/5 lg:w-3/5">
          <div>
            <p className="text-2xl font-bold">Nova Senha</p>
          </div>
          <div className="my-5 space-y-4">
            <div>
              <p className="mb-2 font-semibold">Senha</p>
              <Input
                validationType="password"
                icon="password"
                placeholder="***********"
                inputValue={(inputValue) => setNewPassword(inputValue)}
                passwordOk={(isPassordOk) => setIsPasswordOk(isPassordOk)}
              />
            </div>
          </div>
          <div className="mt-3">
            <Button
              emitClickEvent={updatePassword}
              btnColor="blue"
              btnIsDisabled={isBtnDisabled}
              label="Cadastrar nova senha"
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

export default NewPassword;
