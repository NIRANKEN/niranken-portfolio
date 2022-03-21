import { Chart } from '../../components/organisms/ChartView/Chart';

export const mockedSkills: Chart[] = [
  {
    id: 'front-end',
    title: 'フロントエンド',
    colorCode: '#abd699',
    explanation: `# フロント
      - JavaScript & Sass & Velocity: ゼロからの構築、読み書きできます。
      - JSP: 読み書きできます。
      - React & Redux & Material-UI & TypeScript: 読み書きできます。このくらいできます。(URL貼る)
      - Jest & Cypress: 読み書きできます。
      `,
    results: [
      {
        baseAxisValue: 'JS',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Sass',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Velocity',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'CSS',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'JSP',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'React',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Redux',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'MUI',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'TS',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Jest',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Cypress',
        dataAxisValues: [2],
      },
    ],
  },
  {
    id: 'back-end',
    title: 'バックエンド',
    explanation: `# バックエンド
      - Java6~8: ゼロからの構築、読み書きできます
      - SQL: ゼロからの構築、読み書きできます。PL/SQLも書けます。
      - SpringFramework: 読み書きできます。
      - JUnit: 読み書きできます。ゼロからの導入経験もあります。
      - Python3: 読み書きできます。社内ツール作ったり、お遊び(URL貼る)する程度に
      - TypeScript: 読み書きできます。
      - C++ & Qt: 研究室時代3年使ってたものの、独学なので。
      `,
    colorCode: '#75c9b7',
    results: [
      {
        baseAxisValue: 'Java6/8',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'SQL',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'SpringFramework',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'JUnit',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Typescript',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Python3',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'C++',
        dataAxisValues: [1],
      },
    ],
  },
  {
    id: 'infra',
    title: 'インフラ',
    explanation: `# インフラまわり
      - Linux: 研究室時代含めて、かれこれ7年くらい使ってます。cronやservice仕込んだり、トラブルシュートできます。
      - Windows: サービス設定したり、イベントログとったり、タスクスケジューラ仕込んだり。
      - Oracle: ログ読みやトラブルシュート、設定修正(initOraなど)、新規構築の経験あり。
      - tomcat: ログ読みやトラブルシュート、設定修正(conf配下など)、新規構築の経験あり。
      - nginx: ログ読みやトラブルシュート、設定修正(nginx.confなど)、新規構築の経験あり。
      - AWS: マネジメントコンソールやAWS CLI使えます。EC2, S3, Lambda, IAM, パラメータストアなどの使用経験あり。
      `,
    colorCode: '#c7ddcc',
    results: [
      {
        baseAxisValue: 'Linux',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Windows',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'Oracle',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'tomcat',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'nginx',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'AWS EC2',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'AWS S3',
        dataAxisValues: [1],
      },
      {
        baseAxisValue: 'AWS Lambda',
        dataAxisValues: [1],
      },
    ],
  },
  {
    id: 'ci/cd',
    title: 'CI/CD',
    explanation: `# CI/CD
      - Bash: ゼロからの構築、読み書きできます。
      - Jenkins: CI/CDの仕組み構築できます。
      - Maven: pom.xmlの読み書きできます。
      - GitLab-CI: CI/CDの仕組み構築できます。
      - Docker: Jenkinsや、GitLab-CIなどで、JenkinsFile書いたり。
      - Ansible: 読み書きできます。
      - cloudformation: 読みと調べながら書きできます。
      `,
    colorCode: '#ffe26a',
    results: [
      {
        baseAxisValue: 'Bash',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Jenkins',
        dataAxisValues: [4],
      },
      {
        baseAxisValue: 'Maven',
        dataAxisValues: [3],
      },
      {
        baseAxisValue: 'GitLab-CI',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'Docker',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'ansible',
        dataAxisValues: [2],
      },
      {
        baseAxisValue: 'cloudformation',
        dataAxisValues: [1],
      },
    ],
  },
];
