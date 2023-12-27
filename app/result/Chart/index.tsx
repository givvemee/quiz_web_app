import { ResponsivePie } from '@nivo/pie';
import { ChartBox } from './styles';
import { DataType } from './type';

const Chart = ({ data }: { data: DataType[] }) => {
  return (
    <ChartBox className="chart">
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={3}
        cornerRadius={0}
        colors={['#8A98F1', '#FF6961']}
        borderWidth={1.5}
        arcLinkLabelsTextColor="black"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        theme={{
          labels: {
            text: {
              fontSize: 14,
              fill: '#000000',
            },
          },
          legends: {
            text: {
              fontSize: 12,
              fill: '#000000',
            },
          },
        }}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            translateX: 15,
            translateY: 50,
            itemsSpacing: 10,
            itemWidth: 80,
            itemHeight: 20,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: 'black',
                },
              },
            ],
          },
        ]}
      />
    </ChartBox>
  );
};

export default Chart;
