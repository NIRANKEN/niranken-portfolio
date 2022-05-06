import { Skill } from './Skill';

export const mockedSkills: Skill[] = [
  {
    id: 'skill-id',
    ord: 1,
    title: 'スキルカテゴリ',
    colorCode: '#FFFFFF',
    explanation: `# 説明タイトル

      5 ... 評価値5説明
      4 ... 評価値4説明
      3 ... 評価値3説明
      2 ... 評価値2説明
      1 ... 評価値1説明
      0 ... 評価値0説明
      `,
    results: [
      {
        baseAxisValue: 'スキル1',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'スキル2',
        dataAxisValues: [2],
      },
    ],
  },
];
