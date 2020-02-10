import Head from 'next/head';
import { withStore } from 'react-context-hook';
import { useRouter } from 'next/router';
import { PageTransition } from 'next-page-transitions';

import Page from '../src/components/Page';

import '../src/styles.scss';

const App = ({ Component, pageProps }) => {
    const router = useRouter();

    return (
        <>
            <Head>
                <title>Nattlivet</title>

                <meta name='viewport' content='initial-scale=1, viewport-fit=cover, user-scalable=no' />
                <meta name="theme-color" content="#000000" />

                <meta name='apple-mobile-web-app-title' content='Nattlivet' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
                <link rel="apple-touch-icon" href="/appicon.png" />
                <link rel="apple-touch-startup-image" href="/appicon.png" />
            </Head>
            <Page>
                <PageTransition timeout={150} classNames="AppTransition">
                    <Component {...pageProps} key={router.route} />
                </PageTransition>
            </Page>
        </>
    );
};

export default withStore(App, {
    user: null,
    tickets: null,
    clubs: null,
    feed: null
});
