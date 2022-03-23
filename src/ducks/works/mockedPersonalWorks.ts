import { Work } from './Work';

/* TODO: モックデータ。取得経路をDBから取得するように修正する */
export const mockedPersonalWorks: Work[] = [
  {
    id: 'personalWorkId1',
    ord: 1,
    category: 'お遊び',
    work: '音声麻雀してみた',
    detail: `Python3で音声認識と画像認識が簡単に利用できるとのことで、即席で作ったお遊びプログラムです。`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'personalWorkId2',
    ord: 2,
    category: 'React',
    work: 'ポートフォリオ',
    detail: `React, Redux, Typescript, Material-UIでポートフォリオ作りました。AWS S3にデプロイして見れるようにしてます。TODO: GitHubURLつける、属性に持たせる。 `,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
];
