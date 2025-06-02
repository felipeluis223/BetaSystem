import { MdClose } from "react-icons/md";

export default function ContentModalCreateForm(){
    return (
        <section className="modal-overlay flex justify-center items-center fixed inset-0 bg-black bg-opacity-40 z-50">
            <div className="modal-content w-full max-w-[600px] bg-[#f1f1f1] p-[20px] rounded-[10px]">
                <div className="w-full flex justify-between mb-[10px]">
                <h3 className="text-[1.2rem] font-bold">Formulário de Edição</h3>
                <button className="cursor-pointer">
                    <MdClose className="text-[1.5rem]" />
                </button>
                </div>

                <span className="text-[#808080] text-[14px]">
                Edite os dados desejados:
                </span>

            </div>
        </section>
    )
}