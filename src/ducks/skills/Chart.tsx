export type Chart = {
  id: string;
  ord: number;
  title: string;
  explanation: string;
  colorCode: string;
  results: Result[];
};

type Result = {
  baseAxisValue: string; // default x-axis data
  dataAxisValues: number[]; // default y-axis datalist
};
