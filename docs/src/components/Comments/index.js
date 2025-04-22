import React from 'react';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Comments() {
  const { colorMode } = useColorMode();
  const { siteConfig } = useDocusaurusContext();
  const { giscus } = siteConfig.themeConfig;

  return (
    <div style={{ paddingTop: '20px' }}>
      {giscus && (
        <Giscus
          id="comments"
          repo={giscus.repo}
          repoId={giscus.repoId}
          category={giscus.category}
          categoryId={giscus.categoryId}
          mapping={giscus.mapping || 'pathname'}
          term="Welcome to @giscus/react component!"
          reactionsEnabled={giscus.reactionsEnabled || '1'}
          emitMetadata="0"
          inputPosition="top"
          theme={colorMode === 'dark' ? giscus.darkTheme || 'dark' : giscus.theme || 'light'}
          lang={giscus.lang || 'ja'}
          loading="lazy"
        />
      )}
    </div>
  );
}