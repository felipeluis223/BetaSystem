import FormLogin from "../../components/LoginForm"
import WallpaperLogin from "../../components/LoginWallpaper"

export default function LoginTemplate (){
    return (
        <section className="w-full h-screen flex flex-row ">
            <WallpaperLogin />

            <section className="w-[65%] h-full bg-[#f1f1f1] flex justify-center items-center">
                <FormLogin />
            </section>
        </section>
    )
}