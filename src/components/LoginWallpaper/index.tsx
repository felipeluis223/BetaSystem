import wallpaper from '../../assets/beta.jpg';

export default function LoginWallpaper(){
    return (
        <section className="hidden md:flex w-[35%] h-full bg-[#040404] flex items-center img-wallpaper ">
            <img src={wallpaper}/>
        </section>
    )
}