interface ContentButtonProps {
  onClick?: () => void;
}

export default function ContentButton({ onClick }: ContentButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-[200px] container-form-login h-[50px] bg-[#f2f2f2] rounded-[5px]"
    >
      <h3 className="font-bold cursor-pointer text-white">Criar Novo</h3>
    </button>
  );
}
