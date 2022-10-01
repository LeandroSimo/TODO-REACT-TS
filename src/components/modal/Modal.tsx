import React, { ReactNode, useState } from "react";

// CSS
import styles from "./Modal.module.css";

type Props = {
  children: React.ReactNode;
};

const ModalBase = ({ children }: Props) => {
  return (
    <div id="modal">
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <h2>Text modal</h2>
        {children}
      </div>
    </div>
  );
};

export default ModalBase;
