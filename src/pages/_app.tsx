import { Provider } from "react-redux";

import { store } from "@/redux/store";

import type { AppProps } from "next/app";

import "@/styles/globals.css";

export function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
