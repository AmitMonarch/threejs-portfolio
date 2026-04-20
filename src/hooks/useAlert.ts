import { useState } from "react";

type AlertType = "danger" | "success";

interface AlertState {
  show: boolean;
  text: string;
  type: AlertType;
}

interface ShowAlertOptions {
  text: string;
  type?: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<AlertState>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: ShowAlertOptions) =>
    setAlert({ show: true, text, type });

  const hideAlert = () => setAlert({ show: false, text: "", type: "danger" });

  return { alert, showAlert, hideAlert };
};

export default useAlert;
