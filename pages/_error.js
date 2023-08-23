import Layout from "../components/Layout";

const _error = ({statusCode}) => {
  return (
    <Layout>
      {
        statusCode ? (
<p className="text-center">No se pudo cargar tu pagina: Status Code {statusCode}</p>
        ): (
          <p>No se pudo encotrar esta pagina</p>
        )
      }
    </Layout>
  );
};

export default _error;
