import Button from "./Button";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <section className="max-w-[90%] md:container mx-auto py-32" id="contact">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Contáctenos hoy mismo
      </h2>
      <p className="text-center text-xl md:w-1/2 mx-auto mb-8">
        Estamos aquí para responder a todas sus preguntas sobre seguridad.
        Permítanos ayudarle a proteger lo que más valora.
      </p>
      <form className="flex flex-col gap-2 md:w-1/3 lg:w-1/4 justify-center mx-auto">
        <input
          type="text"
          placeholder="Su nombre"
          id="name"
          name="name"
          className="rounded-md border-1 border-[#e4e4e7] py-2 px-3 focus:outline-[#a1a1aa]"
        ></input>
        <input
          type="email"
          placeholder="Su correo electrónico"
          id="email"
          name="email"
          className="rounded-md border-1 border-[#e4e4e7] py-2 px-3 focus:outline-[#a1a1aa]"
        ></input>
        <input
          type="tel"
          placeholder="Su correo electrónico"
          id="tel"
          name="tel"
          className="rounded-md border-1 border-[#e4e4e7] py-2 px-3 focus:outline-[#a1a1aa]"
        ></input>
        <Button
          text="Solicitar información"
          color="#18181b"
          textColor="white"
          className="primary-button"
        />
      </form>
      <span className="text-center">
        <h4 className="text-xl font-bold mt-8">O llámenos:</h4>
        <p className="flex flex-row justify-center items-center gap-2 mt-4 text-3xl">
          <BsTelephone color="2563eb" size="20" />
          313 530 9486
        </p>
        <p className="flex flex-row justify-center items-center gap-2 mt-4 text-3xl">
          <BsTelephone color="2563eb" size="20" />
          311 322 4799
        </p>
      </span>
    </section>
  );
};

export default Contact;
