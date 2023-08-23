import Layout from "../components/Layout";
import Link from "next/link";

const cunstom404 = () => (
  <Layout>
    <div className="text-center">
      <h1>404</h1>
      <p>
        this page dos not found. Plase return to <Link href="/#">home</Link>
      </p>
    </div>
  </Layout>
);

export default cunstom404;
