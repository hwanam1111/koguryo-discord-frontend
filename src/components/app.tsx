import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import { ReactQueryDevtools } from 'react-query/devtools';
import DefaultRouter from '@routers/router';
import GlobalStyles from '@styles/global-styles';
import ResetStyles from '@styles/reset-styles';
import SweetAlert2Styles from '@styles/sweet-alert2.styles';
import SwiperStyles from '@styles/swiper.styles';
import { ThemeProvider } from '@styles/theme-component';
import theme from '@styles/theme-styles';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        refetchOnMount: false,
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <SwiperStyles />
      <SweetAlert2Styles />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
          <DefaultRouter />
        </QueryClientProvider>
      </ThemeProvider>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;
