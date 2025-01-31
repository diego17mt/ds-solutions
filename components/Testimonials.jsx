import CardTestimonial from "./CardTestimonial";
const Testimonials = () => {
  return (
    <div className="bg-[#f3f4f6]">
      <section className="max-w-[90%] md:container mx-auto py-32" id="testimonials">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
          Lo que dicen nuestros clientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CardTestimonial
            text='"El sistema de seguridad de D&S Solutions ha transformado la forma en que protegemos nuestra empresa. ¡Altamente recomendado!"'
            titleCard="María González, Dueña de negocio"
          />
          <CardTestimonial
            text='"La tecnología de D&S Solutions ha cambiado completamente la forma en que gestionamos la seguridad de nuestra empresa. ¡Recomiendo!"'
            titleCard="Juan Rodríguez, Dueño de negocio"
          />
          <CardTestimonial
            text='"La calidad de las cámaras y la facilidad de uso del sistema son incomparables. Además, las puedo ver desde mi teléfono celular. Me siento mucho más segura en casa."'
            titleCard="Sofía López, Dueña de casa"
          />
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
