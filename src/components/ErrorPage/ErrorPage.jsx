import { useNavigate } from "react-router-dom";

const ErrorPage = () => {

    const navigate = useNavigate();

    const handleBack =()=>{
        navigate(-1)
    }


  return (
    <div className=" w-11/12 mx-auto max-w-7xl border">
      <div className="text-center">
        <h3>
          Status <b>404</b>{" "}
        </h3>
        <h2>This Page Is Not Found </h2>
        <button onClick={handleBack} className="btn">Back</button>
      </div>
    </div>
  );
};

export default ErrorPage;
