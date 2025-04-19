// Botão de "Esqueci a senha":
export function ForgotPassword(){
    return <button type="button" className="w-full text-[11px] flex cursor-pointer hover:text-[#4444c9]">Esqueceu a senha?</button>
};

// Botão para realizar o login:
export function LoginButton(){
    return (
        <button className="w-[250px] h-[40px] bg-[#040404] text-[#f1f1f1] rounded-md cursor-pointer">
            <h2>Login</h2>
        </button>
    );
};
