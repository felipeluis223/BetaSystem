
interface NameInputProps {
    value: string;
    onChange: (value: string)=> void;
    placeholder: string;
}


// Componente do campo de entrada (Email), obtendo o valor:
export function NameInput({value, onChange, placeholder}:NameInputProps){
    return (
        <input 
            type="text" 
            required
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="w-full h-[50px] p-[10px] outline-none rounded-md border border-[#d6d6d6]" 
            placeholder={placeholder}
        />
    );
};
