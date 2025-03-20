interface PasswordInputProps {
    value: string;
    onChange: (value:string)=> void;
    visibility: boolean;
    togglePasswordVisibility: ()=> void;
    placeholder: string;
};

// Componente do campo de entrada (Senha), obtendo o valor:
export function PasswordInput({value, onChange, visibility, togglePasswordVisibility, placeholder="*********"}:PasswordInputProps){
    return (
        <div className="w-full h-[50px] p-[10px] flex flex-row justify-center rounded-md border border-[#d6d6d6]">
            <input 
                type={visibility ? "text" : "password"} 
                required
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                className="w-[80%] h-full outline-none"
                placeholder={placeholder}
            />

            <button type="button" className="w-[20%] h-full text-[#808080] font-bold cursor-pointer" onClick={togglePasswordVisibility}>
                {
                    visibility ? "Ocultar" : "Mostrar"
                }
            </button>
        </div>
    );
};