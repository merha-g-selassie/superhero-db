import React from 'react';
import { Legend, PolarAngleAxis, PolarGrid, PolarRadiusAxis, Radar, RadarChart } from 'recharts';
import { Powerstats } from '../types/Powerstats';

interface PowerStatsRadarChartProps {
  stats: Powerstats;
}

export const PowerStatsRadarChart: React.FC<PowerStatsRadarChartProps> = ({ stats }) => {
  const data = [];
  for (const [key, value] of Object.entries(stats)) {
    data.push({
      subject: key,
      A: value,
      fullMark: 100,
    });
  }

  return (
    <RadarChart cx="150" cy="150" outerRadius="100" width={300} height={300} data={data}>
      <PolarGrid gridType="polygon" />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 100]} />
      <Radar name="Power stats" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  );
};
