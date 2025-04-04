import LoginForm from "../../components/LoginForm";
import LoginWallpaper from "../../components/LoginWallpaper";

export default function LoginTemplate (){
    return (
        <section className="w-full h-screen bg-[#f1f1f1] flex flex-row">
            <LoginWallpaper />

            <section className="w-full md:w-[65%] h-full flex justify-center mt-[50px] md:mt-0 md:items-center">
                <LoginForm />
            </section>
        </section>
    )
};