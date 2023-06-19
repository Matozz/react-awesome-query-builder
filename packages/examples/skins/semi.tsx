import React, { useEffect } from "react";
import { LazyStyleModule } from "../utils";
// @ts-ignore
import styles from "@react-awesome-query-builder/semi/css/styles.scss";

const ImportSemi: React.FC = () => {
  useEffect(() => {
    (styles as LazyStyleModule).use();
    return () => {
      (styles as LazyStyleModule).unuse();
    };
  }, []);
  return null;
};

export default ImportSemi;
