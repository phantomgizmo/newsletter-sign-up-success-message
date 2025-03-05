import { z, ZodType } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";

import Input from "@/components/ui/Input";
import SignUpFormData from "@/types/SignUpFormData";
import { useNavigate } from "react-router-dom";
import Button from "@/components/ui/Button";

import illustSignUpMobile from "@/assets/images/illustration-sign-up-mobile.svg";
import illustSignUpDesktop from "@/assets/images/illustration-sign-up-desktop.svg";

function SignUp() {
  const navigate = useNavigate();

  const SignUpFormSchema: ZodType<SignUpFormData> = z.object({
    email: z.string().email(),
  });

  const form = useForm<SignUpFormData>({
    mode: "onBlur",
    resolver: zodResolver(SignUpFormSchema),
  });

  const onSubmit = (data: SignUpFormData) => {
    console.log(data);
    navigate("/success/" + data.email);
  };

  return (
    <div className="mx-auto flex max-w-(--breakpoint-sm) flex-col gap-3 bg-white font-[roboto] sm:rounded-2xl sm:p-4 sm:shadow-lg md:max-w-[900px] md:flex-row-reverse md:items-center">
      <header className="mx-auto">
        <picture>
          <source
            media="(max-width: 825px)"
            type="image/svg+xml"
            srcSet={illustSignUpMobile}
          />
          <source type="image/svg+xml" srcSet={illustSignUpDesktop} />
          <img src={illustSignUpMobile} alt="" />
        </picture>
      </header>
      <section className="flex flex-col gap-4 p-4 md:items-baseline md:px-8">
        <h1 className="text-[2.5rem] font-bold md:text-[3.5rem]">
          Stay updated!
        </h1>
        <p>
          Stay updated! Join 60,000+ product managers receiving monthly updates
          on:
        </p>
        <ul className="card-body__list">
          <li
            className={`relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]`}
          >
            Product discovery and building what matters
          </li>
          <li
            className={`relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]`}
          >
            Measuring to ensure updates are a success
          </li>
          <li
            className={`relative mb-3 list-none ps-8 before:absolute before:top-0 before:left-0 before:block before:transform-[scale(0.85)] before:content-[url('@/assets/images/icon-list.svg')]`}
          >
            And much more!
          </li>
        </ul>
        <form
          className="flex flex-col gap-6 md:w-full"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <Input
            className="rounded-sm border border-solid p-4 outline-0 hover:cursor-pointer"
            type="email"
            placeholder="email@company.com"
            error={form.formState.errors?.email}
            {...form.register("email")}
          />
          <Button type="submit">Subscribe to monthly newsletter</Button>
        </form>
      </section>
    </div>
  );
}

export default SignUp;
