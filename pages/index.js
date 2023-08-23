import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiencia, projectos } from "../Profile";

const index = () => (
  <Layout>
    {/** Seccion de foto */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="01- foto.jpg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1>Franco antilipi</h1>
              <h3>Fullstack Developer</h3>
              <p>
                Soy un desarrollador fronted con habilidades en Javascript,
                HTML, CSS, React, Firebase y bases de datos SQL. Siempre estoy
                buscando aprender y mejorar mis habilidades para crear
                soluciones web de alta calidad.
              </p>
              <a href="hireme">Hire me</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/** Seccion de descripcio */}
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>
            {skills.map(({ skills, porcentaje }, i) => (
              <div className="py-3">
                <h5>{skills}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${porcentaje}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Experiencia</h1>
            <ul>
              {experiencia.map(({ title, descripcion, from, to }, index) => (
                <li key={index}>
                  <h3>{title}</h3>
                  <h5>
                    {from}-{to}
                  </h5>
                  <p>{descripcion}</p>
                </li>
              ))}
            </ul>
            <Link href="/experiencia" className="btn btn-light">
              conocer mas
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/** Seccion de Portafolio */}
    <div className="row py-2">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projectos.map(({ nombre, descripcion, imagen, link }, i) => (
              <div className="col-md-4 py-2">
                <div className="card h-100">
                  <div className="overflow">
                    <img src={`/${imagen}`} alt="" className="card-img-top" />
                  </div>
                  <div className="card-body">
                    <h3>{nombre}</h3>
                    <p>{descripcion}</p>
                    <a href={link} target="_blank">
                      Conocer mas
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12">
            <div className="text-center mt-4">
              <Link href="/portfolio" className="btn btn-outline-light">
                Mas Projectos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default index;
