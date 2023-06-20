import React from "react";

const ImportUi = React.lazy(() => import("./ui"));
const ImportSemi = React.lazy(() => import("./semi"));

const skinToImport: Record<string, React.LazyExoticComponent<React.ComponentType<any>>> = {
  vanilla: ImportUi,
  semi: ImportSemi,
};

const Import: React.FC<{ skin: string }> = ({ skin }) => {
  const Import = skinToImport[skin];
  return (
    <React.Suspense fallback={<>loading styles for {skin}</>}>
      <Import />
    </React.Suspense>
  );
};

export default Import;
