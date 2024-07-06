import { ForgotPasswordForm } from "./justExample/pages/forgotpassPage";
import { LoginPage } from "./justExample/pages/loginPage";
import { OTPForm } from "./justExample/pages/OTPPage";
import { Portal } from "./justExample/pages/Portal";
import { ResetForm } from "./justExample/pages/ResetPage";
import { SuccessForm } from "./justExample/pages/success";
import loginBg from "./justExample/logINBgImage.png";
function App() {
  return (
    <main className=" w-full h-full">
        {/* <Portal/> */}
      <header className=" border w-full py-6 pl-12 bg-white">
        <h4 className="text-[#013D84] text-3xl font-bold">LOGO</h4>
      </header>
      <img src={loginBg} className="w-full h-screen" />
      <section className="absolute top-[8.5%] bg-black bg-opacity-25 h-full w-full flex justify-center items-center py-40 px-32">
        <LoginPage/>
        {/* <ForgotPasswordForm/>
        <OTPForm/>
        <ResetForm/>
        <SuccessForm/> */}
      </section>
    </main>
  );
}

export default App;
