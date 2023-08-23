import NavBar from "./NavBar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({ children, footer = true }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      nProgress.start();
    };

    router.events.on("routerChangeStar", handleRouteChange);

    router.events.on("routerChangeComplete", () => nProgress.done());

    return () => {
      router.events.off("routerChangeStar", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <NavBar />

      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1>&copy; Franco Antilipi Portafolio</h1>
            <p>2000 - {new Date().getFullYear()}</p>
            <p>All rights Reserve</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
