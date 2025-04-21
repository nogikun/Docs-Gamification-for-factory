import React from 'react';
import Footer from '@theme-original/DocItem/Footer';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import { useThemeConfig } from '@docusaurus/theme-common';

export default function FooterWrapper(props) {
  const { colorMode } = useColorMode();
  const { giscus } = useThemeConfig();
  
  return (
    <>
      <Footer {...props} />
      <div style={{ marginTop: '50px' }}>
        <Giscus
          repo={giscus.repo}
          repoId={giscus.repoId}
          category={giscus.category}
          categoryId={giscus.categoryId}
          mapping={giscus.mapping || "pathname"}
          strict={giscus.strict || "0"}
          reactionsEnabled={giscus.reactionsEnabled || "1"}
          emitMetadata={giscus.emitMetadata || "0"}
          inputPosition={giscus.inputPosition || "bottom"}
          theme={colorMode === "dark" ? giscus.darkTheme : giscus.theme}
          lang={giscus.lang || "en"}
          loading="lazy"
        />
      </div>
    </>
  );
}