import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import loadingGif from '../../../public/images/loadingGif.gif';
import useAuth from '../../data/hook/useAuth';

export default function ForceAuth(props) {
  const { user, loading } = useAuth();

  function renderingContent() {
    return (
      <>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `if(!document.cookie?.includes("cade-a-encomenda-auth")) {window.location.href ="/auth"}`,
            }}
          />
        </Head>
        {props.children}
      </>
    );
  }

  function renderingLoading() {
    return (
      <div className={`flex justify-center items-center h-screen`}>
        <Image src={loadingGif} />
      </div>
    );
  }

  if (!loading && user?.email) {
    return renderingContent();
  } else if (loading) {
    return renderingLoading();
  } else {
    router.push('/auth');
    return null;
  }
}
