import {  useRouteError } from "react-router-dom";

const ErrorPage = ({message}) => {
    const errorInfo = useRouteError()
    // const {data,status,statusText} = errorInfo
    // const location = useLocation()
 
    return (
        <div>
            {
                message&&  <h1 className="text-2xl text-center font-semibold " >{message}</h1>
            }
            {
                errorInfo && <div className="text-center font-medium mt-20">
                    <h1 className="text-4xl font-bold">{errorInfo?.status}</h1>
                    <p className="text-xl">{errorInfo?.statusText}</p>
                    <p>{errorInfo?.data}</p>
                </div>
            }
        </div>
    );
};

export default ErrorPage;