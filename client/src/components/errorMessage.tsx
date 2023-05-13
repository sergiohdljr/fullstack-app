type mensagemProps = {
    mensagem ?: string
} 

export const ErrorMessage = ({mensagem}:mensagemProps) => {
    return(<p className="text-sm text-red-500 mt-1">{mensagem}</p>);
}