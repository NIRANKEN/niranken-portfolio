import { Work } from './Work';

/* TODO: モックデータ。取得経路をDBから取得するように修正する */
export const mockedPersonalWorks: Work[] = [
  {
    id: 'personalWorkId1',
    type: 'personal',
    ord: 1,
    category: 'お遊び',
    work: '音声麻雀してみた',
    detail: `Python3で音声認識と画像認識が簡単に利用できるとのことで、即席で作ったお遊びプログラムです。`,
    linkUrl: 'https://github.com/NIRANKEN/auto_mahjong',
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'personalWorkId2',
    type: 'personal',
    ord: 2,
    category: 'React',
    work: 'ポートフォリオ',
    detail: `React, Redux, Typescript, Material-UIでポートフォリオ作りました。AWS S3にデプロイして見れるようにしてます。`,
    linkUrl: 'https://github.com/NIRANKEN/niranken-portfolio',
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
];
