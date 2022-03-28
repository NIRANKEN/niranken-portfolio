import React from 'react';
import { PageTitle } from 'components/molecules/PageTitle';

export const Home: React.FC<{}> = () => {
  return (
    <PageTitle
      title="ホーム"
      explanation={`にらんけんのPlaygroundスペースです。
      ポートフォリオ置いてます。`}
    />
  );
};
