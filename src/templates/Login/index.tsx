import LoginForm from "../../components/LoginForm";
import LoginWallpaper from "../../components/LoginWallpaper";

export default function LoginTemplate (){
    return (
        <section className="w-full h-screen flex flex-row ">
            <LoginWallpaper />

            <section className="w-[65%] h-full bg-[#f1f1f1] flex justify-center items-center">
                <LoginForm />
            </section>
        </section>
    )
};