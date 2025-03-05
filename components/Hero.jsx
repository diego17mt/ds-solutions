import Button from "./Button";

const Hero = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <section className="hero max-w-[90%] md:container mx-auto py-32 flex flex-col md:flex-row items-center gap-16">
        <div>
          <h1 className="text-4xl md:text-6xl font-bold">
            Proteja su hogar y negocio con tecnología de vanguardia
          </h1>
          <p className="mt-2 text-xl">
            Ofrecemos soluciones de seguridad integrales con cámaras de alta
            definición y sistemas de alarma inteligentes.
          </p>
          <div className="flex flex-col md:flex-row gap-4 mt-4">
            <Button
              onClick={() => window.open("https://wa.me/573103054150", "_blank")}
              text="Contáctanos"
              color="#18181b"
              textColor="white"
              className="primary-button"
            />
            <Button
            onClick={() => window.location.href="#services"}
              text="Más información"
              color="white"
              textColor="black"
              className="secondary-button"
            />
          </div>
        </div>
        <img
          className="w-1/3 rounded-md hidden md:block"
          src="/images/hero-image.png"
          alt="Técnico instalador de cámaras de seguridad"
        ></img>
      </section>
    </div>
  );
};

export default Hero;
