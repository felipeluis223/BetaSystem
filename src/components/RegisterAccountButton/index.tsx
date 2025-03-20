type CreateAccountButtonProps = {
    onClick?: () => void; // Torna onClick opcional
};

// Botão para criar uma conta:
export function RegisterAccountButton({ onClick }:CreateAccountButtonProps){
    return (
        <button onClick={onClick} className="h-[60px] text-[13px] text-[#808080] rounded-md cursor-pointer hover:text-[#4444c9]">
            <p>Não tem conta? Cadastra-se</p>
        </button>
    );
};