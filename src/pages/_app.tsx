import configureStore from "@/stores/persist";
import "@/styles/styles.scss";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/lib/integration/react";

const { persistor, store } = configureStore();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ToastContainer autoClose={3000} position="bottom-left" limit={3} />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Suspense >
            <Component {...pageProps} />
          </Suspense>
        </PersistGate>
      </Provider>
    </>
  );
}
