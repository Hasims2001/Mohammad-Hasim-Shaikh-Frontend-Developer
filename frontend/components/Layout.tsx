import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import styles from "@/styles/Layout.module.css"
interface LayoutProps  {
 children: ReactNode
}
const Layout: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className=''>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;