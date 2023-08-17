import React from "react";
import "./../styles/NosotrosPage.css";

const NosotrosPage = (props) => {
  return (
    <div className="container">
      <div className="row inicio">
        <div className="col-5">
          <br />
          <img
            className="imagen-personal-1"
            src={require("./../images/papi_egar_corralon.png")}
            alt="Imagen"
          />
        </div>
        <div className="col-8">
          <p className="texto-inicio">
            Bienvenidos a Casa Irigoyen, tu socio confiable en la construcción
            desde 1981. Fundada por Ataliva Martin "Pirincho" Irigoyen, una
            figura visionaria y apasionada del mundo de la construcción, Casa
            Irigoyen ha crecido desde sus humildes raíces hasta convertirse en
            un referente en el suministro de materiales de construcción de
            calidad.
          </p>
        </div>
      </div>

      <p>
        Lo que comenzó como un sueño audaz en 1981 se ha transformado en una
        historia de éxito de tres décadas y más. La dedicación incansable de
        "Pirincho" Irigoyen y su compromiso con la excelencia sentaron las bases
        de lo que hoy es Casa Irigoyen. A lo largo de los años, hemos mantenido
        nuestra pasión por la construcción y nos enorgullece ser una empresa
        familiar arraigada en valores sólidos y relaciones duraderas.
      </p>
      <div className="row dos">
        <div CassName="col-6">
          <p className="texto-inicio">
            En Casa Irigoyen, sabemos que nuestro equipo es el corazón de
            nuestra empresa. Con más de 20 empleados dedicados y apasionados,
            cada miembro de nuestro equipo comparte la visión de proporcionar
            soluciones excepcionales en el ámbito de la construcción. Nuestros
            expertos en materiales y servicios están comprometidos con brindar
            asesoramiento personalizado y soluciones a medida para cada
            proyecto, sin importar su tamaño.
          </p>
        </div>

        <div className="col-6">
          <br />
          <img
            className="imagen-personal-1"
            src={require("./../images/equipo.jpeg")}
            alt="Imagen"
          />
        </div>
      </div>

      <p>
        Como líderes en el mercado de materiales de construcción, nos esforzamos
        por superar constantemente las expectativas de nuestros clientes.
        Trabajamos incansablemente para mantenernos actualizados con las últimas
        tendencias y tecnologías en la industria, garantizando que nuestros
        clientes tengan acceso a productos de alta calidad y servicios
        innovadores. Nuestra misión es ser tu socio de confianza en cada etapa
        de tu proyecto de construcción.
      </p>

      <p>
        Bajo la dirección de Edgardo Irigoyen, Casa Irigoyen continúa
        floreciendo y expandiendo su legado. Edgardo trae consigo una
        combinación única de experiencia, visión y pasión por el negocio,
        asegurando que los valores fundamentales y la dedicación a la
        satisfacción del cliente que han sido la piedra angular de nuestra
        empresa sigan siendo nuestro enfoque principal.
      </p>

      <p>
        En Casa Irigoyen, creemos que cada ladrillo, cada viga y cada detalle
        importa en la construcción de tus sueños. Te invitamos a unirte a
        nosotros en esta emocionante jornada de creación y transformación, donde
        tu visión se convierte en realidad.
      </p>

      <p>¡Gracias por elegir Casa Irigoyen, tu socio en la construcción!</p>
    </div>
  );
};

export default NosotrosPage;
