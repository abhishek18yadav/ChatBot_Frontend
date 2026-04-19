 const  Auth = ({children}) => {
    return (
        <div className="h-screen flex items-center justify-center bg-brand-soft">
            <div className="md:h-auto md:w-105">
                {children}
            </div>
        </div>
    );
};
export default Auth;