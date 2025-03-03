import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import "./Card.css";
import Input from "@/components/Input/Input";
import SignUpFormData from "@/types/SignUpFormData";

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
    <div className="flex flex-col gap-3 font-[roboto]">
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
      <section className="flex flex-col gap-4 p-4">
        <h1 className="text-[2.5rem] font-bold">Stay updated!</h1>
        <p>
          Stay updated! Join 60,000+ product managers receiving monthly updates
          on:
        </p>
        <ul className="card-body__list">
          <li className="relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]">
            Product discovery and building what matters
          </li>
          <li className="relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]">
            Measuring to ensure updates are a success
          </li>
          <li className="relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]">
            And much more!
          </li>
        </ul>
        <form
          className="card-body__form"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input
            className="rounded-sm border border-solid p-4 outline-0"
            type="email"
            placeholder="email@company.com"
            error={form.formState.errors?.email}
            {...form.register("email")}
          />
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
