import { Work } from './Work';

export const mockedWorks: Work[] = [
  {
    id: 'workId1',
    type: 'webEngineer',
    ord: 1,
    category: '保守開発',
    work: 'やったこと1',
    detail: `詳細1。
    詳細2。`,
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
  {
    id: 'personalWorkId1',
    type: 'personal',
    ord: 1,
    category: 'お遊び',
    work: 'やったこと2',
    detail: `詳細3`,
    linkUrl: 'dummy-url',
    writtenAt: 'YYYY-MM-DD',
    writtenBy: 'にらんけん',
  },
];
