interface EmailInputProps {
    value: string,
    onChange: (value: string)=> void
}

export function EmailInput({value, onChange}:EmailInputProps){
    return (
        <input 
            type="text" 
            value={value}
            onChange={(e)=>onChange(e.target.value)}
            className="w-full h-[50px] p-[10px] outline-none rounded-md border border-[#d6d6d6]" 
            placeholder="exemple@email.com"
        /> 
    );
};
