const SuccessMessage = () => {
  return (
    <>
      <section>
        <img src="/src/assets/images/icon-success.svg" alt="" />
        <h1>Thanks for subscribing!</h1>
        <p>
          Thanks for subscribing! A confirmation email has been sent to
          ash@loremcompany.com. Please open it and click the button inside to
          confirm your subscription.
        </p>
      </section>
      <section>
        <button>Dismiss message</button>
      </section>
    </>
  );
};

export default SuccessMessage;
