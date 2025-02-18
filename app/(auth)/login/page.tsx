import { TabsForms } from "./components/TabsForms";

export default function LoginPage() {
  return (
    <div className="grid h-full max-h-screen overflow-hidden">
      <div className="flex justify-center h-full">
        <div className="text-white flex flex-col items-center justify-center p-6">
          <h1 className="text-blue-500 text-2xl text-center mb-5">
            PassManager
          </h1>
          <h2 className="text-4xl font-medium text-black">
            Bienvenido de nuevo
          </h2>
          <p className="text-center mt-4 mb-6 text-slate-400">
            Bienvenido de nuevo, por favor ingresa tus credenciales
          </p>
          <TabsForms />
        </div>
      </div>
    </div>
  );
}
