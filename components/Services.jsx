import Card from "./Card";
const Services = () => {
  return (
    <section className="max-w-[90%] md:container mx-auto py-32" id="services">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">
        Nuestros Servicios y Soluciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        <Card
          nombreIcono="camera"
          titleCard="Instalación de Sistemas de Seguridad"
          text="Instalación profesional de sistemas de seguridad personalizados con cámaras HD para vigilancia continua."
        />
        <Card
          nombreIcono="eye"
          titleCard="Monitoreo 24/7"
          text="Servicios de monitoreo 24 horas al dia, 7 dias a la semana."
        />
        <Card
          nombreIcono="notification"
          titleCard="Alarmas Inteligentes"
          text="Sistemas de alarma avanzados con detección de intrusos y notificaciones instantáneas a su dispositivo."
        />
        <Card
          nombreIcono="lock"
          titleCard="Control de Acceso"
          text="Implementación de soluciones avanzadas para gestionar de forma segura quién entra y sale de sus instalaciones."
        />
        <Card
          nombreIcono="check"
          titleCard="Mantenimiento y Soporte"
          text="Servicios de mantenimiento regular y soporte técnico para garantizar el funcionamiento óptimo de su sistema."
        />
        <Card
          nombreIcono="smart"
          titleCard="Integración de Sistemas Inteligentes"
          text="Integración de sistemas de seguridad externos para ampliar la protección de su negocio."
        />
      </div>
    </section>
  );
};

export default Services;
