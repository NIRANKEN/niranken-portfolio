import React from 'react';
import {
  ComposedChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  Bar,
  XAxis,
  Tooltip,
} from 'recharts';
import { Chart } from '../../../ducks/skills/Chart';

type ChartViewProps = {
  chart: Chart;
};

export const ChartView: React.FC<ChartViewProps> = ({
  chart,
}: ChartViewProps) => {
  const dataKey = `${chart.id}-skill`;
  type ChartData = {
    name: string;
    [key: string]: string | number;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={chart.results.map((result) => {
          const data: ChartData = {
            name: result.baseAxisValue,
          };
          result.dataAxisValues.forEach((dataAxisValue) => {
            const keyName = dataKey;
            data[keyName] = dataAxisValue;
          });
          return data;
        })}
        margin={{
          top: 16,
          right: 16,
          bottom: 16,
          left: 0,
        }}
        layout="horizontal"
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis
          key="left"
          yAxisId="left"
          orientation="left"
          domain={[0, 5]}
          tickCount={6}
        />
        <Tooltip />
        <Bar
          dataKey={dataKey}
          yAxisId="left"
          fill={chart.colorCode}
          type="bar"
          barSize={35}
          isAnimationActive={false}
        ></Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};
