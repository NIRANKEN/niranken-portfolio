export type Work = {
  id: string;
  type: 'webEngineer' | 'personal';
  ord: number;
  category: string;
  work: string;
  // skills: string;
  detail: string;
  writtenAt: string;
  writtenBy: string;
  linkUrl?: string;
}