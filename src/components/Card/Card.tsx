import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import "./Card.css";
import Input from "../Input/Input";
import SignUpFormData from "../../types/SignUpFormData";

function Card() {
  const SignUpFormSchema: ZodType<SignUpFormData> = z.object({
    email: z.string().email(),
  });

  const form = useForm<SignUpFormData>({
    mode: "onBlur",
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
  };

  return (
    <div className="card">
      <header>
        <picture>
          <source
            media="(max-width: 684px)"
            type="image/svg+xml"
            srcSet="/src/assets/images/illustration-sign-up-mobile.svg"
          />
          <source
            type="image/svg+xml"
            srcSet="/src/assets/images/illustration-sign-up-desktop.svg"
          />
          <img
            src="/src/assets/images/illustration-sign-up-mobile.svg"
            alt=""
          />
        </picture>
      </header>
      <section className="card-body">
        <h1 className="card-body__header">Stay updated!</h1>
        <p>
          Stay updated! Join 60,000+ product managers receiving monthly updates
          on:
        </p>
        <ul className="card-body__list">
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
        <form
          className="card-body__form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <label className="form-group__label">Email address</label>
            <Input
              className="form-group__input"
              type="email"
              placeholder="email@company.com"
              error={form.formState.errors?.email}
              {...form.register("email")}
            />
          </div>
          {form.formState.errors?.email ? <span>error</span> : <></>}
          <button className="btn-submit" type="submit">
            Subscribe to monthly newsletter
          </button>
        </form>
      </section>
    </div>
  );
}

export default Card;
