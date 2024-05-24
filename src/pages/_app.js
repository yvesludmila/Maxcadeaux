import { useRouter } from "next/router";
import { Provider } from "react-redux";

import { store, wrapper } from "../store/store";

import "../../public/css/style.css";

function MyApp({ Component, pageProps }) {
  pageProps.router = useRouter();

  return (
    <>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

// export default MyApp;
export default wrapper.withRedux(MyApp);
