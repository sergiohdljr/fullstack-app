import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ErrorMessage } from "./errorMessage";
import clsx from "clsx";
import { useState } from "react";
import { XCircle, CheckCircle } from "phosphor-react";

export const Form = () => {
  const validation = z
    .object({
      Nome: z.string().min(1, { message: "Nome é obrigatório." }),
      Sobrenome: z.string().min(1, { message: "Sobrenome é obrigatório." }),
      Email: z
        .string()
        .min(1, { message: "E-mail é obrigatório" })
        .email({ message: "Forneça um E-mail válido." }),
      Senha: z
        .string()
        .min(8, { message: "A senha deve ter no minímo 8 caracteres." }),
      confirmaSenha: z
        .string()
        .min(8, { message: "É preciso confirmar a senha." }),
      termos: z.literal(true, {
        errorMap: () => ({ message: "Você precisa aceitar os termos de uso." }),
      }),
    });

  type ValidationSchemaForm = z.infer<typeof validation>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, dirtyFields },
  } = useForm<ValidationSchemaForm>({
    resolver: zodResolver(validation),
    resetOptions: {
      keepValues: false,
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<ValidationSchemaForm> = () => {
    alert("Dados do usuário registrados com sucesso!");

    reset({
      Nome: "",
      Sobrenome: "",
      Email: "",
      Senha: "",
      confirmaSenha: "",
    });
  };

  const [disabled, setDisabled] = useState(true);

  return (
    <form className="px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="Nome"
          >
            Nome:
          </label>
          <div
            className={clsx(
              "min-h-fit w-full flex justify-center items-center gap-2 border rounded",
              {
                "focus:border-green-400 border-green-400":
                  !errors.Nome && dirtyFields.Nome,
                "focus:border-red-400 border-red-400": errors.Nome,
              }
            )}
          >
            <input
              className="m-2 text-sm appearance-none border-none outline-none flx flex-grow"
              type="text"
              id="Nome"
              placeholder="Nome"
              {...register("Nome")}
            />
            {errors.Nome ? (
              <XCircle width={24} height={24} color={"rgb(248 113 113)"} />
            ) : null}
            {!errors.Nome && dirtyFields.Nome ? (
              <CheckCircle width={24} height={24} color={"rgb(74 222 128)"} />
            ) : null}
          </div>
          {errors ? <ErrorMessage mensagem={errors.Nome?.message} /> : null}
        </div>

        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="Sobrenome"
          >
            Sobrenome:
          </label>
          <div
            className={clsx(
              "min-h-fit w-full flex justify-center items-center gap-2 border rounded",
              {
                "focus:border-green-400 border-green-400":
                  !errors.Sobrenome && dirtyFields.Sobrenome,
                "focus:border-red-400 border-red-400": errors.Sobrenome,
              }
            )}
          >
            <input
              className="m-2 text-sm appearance-none border-none outline-none flx flex-grow"
              id="Sobrenome"
              type="text"
              placeholder="Sobrenome"
              {...register("Sobrenome")}
            />
            {errors.Sobrenome ? (
              <XCircle width={24} height={24} color={"rgb(248 113 113)"} />
            ) : null}
            {!errors.Sobrenome && dirtyFields.Sobrenome ? (
              <CheckCircle width={24} height={24} color={"rgb(74 222 128)"} />
            ) : null}
          </div>
          {errors && <ErrorMessage mensagem={errors.Sobrenome?.message} />}
        </div>
      </div>
      <div className="mb-4">
        <label
          className="block mb-2 text-sm font-bold text-gray-700"
          htmlFor="email"
        >
          Email:
        </label>
        <div
          className={clsx(
            "min-h-fit w-full flex justify-center items-center gap-2 border rounded",
            {
              "border-green-400": !errors.Email && dirtyFields.Email,
              "border-red-400": errors.Email,
            }
          )}
        >
          <input
            className="m-2 text-sm appearance-none border-none outline-none flx flex-grow"
            id="email"
            type="email"
            placeholder="Email"
            {...register("Email")}
          />
          {errors.Email ? (
            <XCircle width={24} height={24} color={"rgb(248 113 113)"} />
          ) : null}
          {!errors.Email && dirtyFields.Email ? (
            <CheckCircle width={24} height={24} color={"rgb(74 222 128)"} />
          ) : null}
        </div>

        {errors && <ErrorMessage mensagem={errors.Email?.message} />}
      </div>
      <div className="mb-4 md:flex md:justify-between">
        <div className="mb-4 md:mr-2 md:mb-0">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Senha:
          </label>
          <div
            className={clsx(
              "min-h-fit w-full flex justify-center items-center gap-2 border rounded",
              {
                "border-green-400": !errors.Senha && dirtyFields.Senha,
                "border-red-400": errors.Senha,
              }
            )}
          >
            <input
              className="m-2 text-sm appearance-none border-none outline-none flx flex-grow"
              id="Senha"
              type="password"
              {...register("Senha")}
            />
            {errors.Senha ? (
              <XCircle width={24} height={24} color={"rgb(248 113 113)"} />
            ) : null}
            {!errors.Senha && dirtyFields.Senha ? (
              <CheckCircle width={24} height={24} color={"rgb(74 222 128)"} />
            ) : null}
          </div>
          {errors && <ErrorMessage mensagem={errors.Senha?.message} />}
        </div>
        <div className="md:ml-2">
          <label
            className="block mb-2 text-sm font-bold text-gray-700"
            htmlFor="confirmaSenha"
          >
            Confirme a senha:
          </label>
          <div
            className={clsx(
              "min-h-fit w-full flex justify-center items-center gap-2 border rounded",
              {
                "border-green-400":
                  !errors.confirmaSenha && dirtyFields.confirmaSenha,
                "border-red-400": errors.confirmaSenha,
              }
            )}
          >
            <input
              className="m-2 text-sm appearance-none border-none outline-none flx flex-grow"
              id="confirmaSenha"
              type="password"
              {...register("confirmaSenha")}
            />
            {errors.confirmaSenha ? (
              <XCircle width={24} height={24} color={"rgb(248 113 113)"} />
            ) : null}
            {!errors.confirmaSenha && dirtyFields.confirmaSenha ? (
              <CheckCircle width={24} height={24} color={"rgb(74 222 128)"} />
            ) : null}
          </div>
          {errors && <ErrorMessage mensagem={errors.confirmaSenha?.message} />}
        </div>
      </div>
      <div className="mb-4">
        <input
          type="checkbox"
          id="termos"
          {...register("termos", {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
              setDisabled(!e.target.checked),
          })}
        />
        <label
          htmlFor="termos"
          className="ml-2 mb-2 text-sm font-bold text-gray-700"
        >
          Aceito os termos de uso.
        </label>
        {errors && <ErrorMessage mensagem={errors.termos?.message} />}
      </div>

      <div className="mb-6 h-auto flex-col gap-3 ">
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:bg-opacity-40 disabled:cursor-not-allowed cursor-pointer"
          type="submit"
          disabled={disabled}
        >
          Registrar Conta
        </button>
        <button
          className="w-full px-4 py-2 font-bold text-white bg-blue-500  hover:bg-blue-700 focus:outline-none focus:shadow-outline disabled:bg-opacity-40 disabled:cursor-not-allowed cursor-pointer"
          type="submit"
          disabled={disabled}
        > 
        Visualizar Usuários Cadastrados        
       </button>
      </div>
      <hr className="mb-6 border-t" />
     
    </form>
  );
};
