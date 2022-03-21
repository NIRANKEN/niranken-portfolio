import React from 'react';
import {
  ComposedChart,
  CartesianGrid,
  ResponsiveContainer,
  YAxis,
  Bar,
  XAxis,
} from 'recharts';
import { Chart } from './Chart';

type ChartViewProps = {
  chart: Chart;
};

export const ChartView: React.FC<ChartViewProps> = ({ chart }: ChartViewProps) => {
  const dataKey = `${chart.id}-total_emp`;
  type ChartData = {
    name: string;
    [key: string]: string | number;
  };

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        width={820}
        height={360}
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
          left: 16,
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
        {/* 1. 既存KPIだと、マウスカーソルの位置によらずTooltip固定なのでどっちがよいか検討する*/}
        {/* 2. 既存KPIだと表示されているものが多い(年度(黒), 水色の●印, 総社員数: 【数値】(黒))*/}
        {/* 3. Tooltipの枠線の色そろえるか*/}
        {/* 4. Tooltipのふきだし表示*/}
        <Bar
          dataKey={dataKey}
          yAxisId="left"
          fill={chart.colorCode}
          type="bar"
          barSize={25}
          isAnimationActive={false}
        >
        </Bar>
      </ComposedChart>
    </ResponsiveContainer>
  );
};

