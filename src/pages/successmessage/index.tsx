import Button from "@/components/ui/Button";
import { useNavigate, useParams } from "react-router-dom";

import iconSuccess from "@/assets/images/icon-success.svg";

const SuccessMessage = () => {
  const params = useParams();
  const navigate = useNavigate();
  return (
    <>
      <section className="mx-auto flex h-screen flex-col rounded-2xl bg-white p-5 font-[roboto] sm:h-auto sm:max-w-[445px] sm:gap-8 sm:p-10">
        <div className="flex grow flex-col items-start justify-center gap-6">
          <img className="sm:size-14" src={iconSuccess} alt="" />
          <h1 className="text-5xl leading-[0.7] font-bold">
            Thanks for subscribing!
          </h1>
          <p>
            A confirmation email has been sent to{" "}
            <strong>{params?.email}</strong>. Please open it and click the
            button inside to confirm your subscription
          </p>
        </div>
        <Button onClick={() => navigate("/")}>Dismiss message</Button>
      </section>
    </>
  );
};

export default SuccessMessage;
