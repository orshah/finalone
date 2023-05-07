import CustomButton from "./components/CustomButton/CustomButton.style";
import CustomInput from "./components/CustomInput/CustomInput";
import "./App.css";

const passwordInput = {
  type: "password",
  required: true,
  maxLenght: 4,
  minLenght: 2,
  placeholder: "Enter your password",
};

function App() {
  const showAlert = () => {
    return alert("Hey, I am the alert.");
  };

  const showPrompt = () => {
    return prompt("Enter your name");
  };

  return (
    <>
      <h1>Hello</h1>
      <CustomInput {...passwordInput} />
      <CustomInput
        type="password"
        required
        maxLenght={2}
        minLenght={4}
        placeholder="Enter name"
      />
      <CustomButton text="button" type="danger" onClickHandler={showAlert} />
      <CustomButton text="button" type="danger" onClickHandler={showPrompt} />
    </>
  );
}

export default App;
