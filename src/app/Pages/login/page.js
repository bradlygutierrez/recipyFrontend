import AuthMenu from "@/app/components/login"

const Login = () => {
    return (
        <div className="h-screen w-full bg-gray-100 flex flex-col justify-around items-center">
            <p className=" font-bold text-3xl text-gray-500 flex flex-col w-1/2 text-center"> Hola bienvenido a tu app de recetas, inicia sesión para comenzar a crear tus recetas</p>
            <AuthMenu></AuthMenu>
        </div>
    );

}

export default Login