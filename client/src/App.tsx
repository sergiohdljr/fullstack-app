import { Form } from "./components/Form";

export function App() {
  return (
    <div className="max-w-xl mx-auto w-full">
      <div className="flex justify-center my-12 ">
        <div className="w-full lg:w-11/12 bg-white p-5 rounded-lg shadow-xl">
          <h3 className="pt-4 text-2xl text-center font-bold">Criar conta</h3>
          <Form />
        </div>
      </div>
    </div>
  );
}
