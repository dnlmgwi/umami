import Head from 'next/head';
import useLocale from 'components/hooks/useLocale';
import styles from './LoginLayout.module.css';

export function LoginLayout({ children }) {
  const { dir } = useLocale();

  return (
    <div className={styles.layout} dir={dir}>
      <Head>
        <title>{`Login | dnlmgwi`}</title>
      </Head>
      {children}
    </div>
  );
}

export default LoginLayout;
