import Chart from 'react-apexcharts';
import { expenses } from '../../common/components/navbar/mocks/ExpensesMock';

export const ExpensesChart = () => {
  const data = {
    series: [
      {
        name: `${expenses[0].kategoria}`,
        data: [80, 55, 57, 56, 61, 58, 63, 60, 66, 55, 1, 1],
      },
      {
        name: `${expenses[1].kategoria}`,
        data: [76, 85, 101, 98, 87, 105, 91, 50, 94],
      },
      {
        name: `${expenses[2].kategoria}`,
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
      {
        name: `${expenses[2].kategoria}`,
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
      {
        name: `${expenses[2].kategoria}`,
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],

    options: {
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 4,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Styczeń',
          'Luty',
          'Marzec',
          'Kwiecień',
          'Maj',
          'Czerwiec',
          'Lipiec',
          'Sierpień',
          'Wrzesień',
          'Październik',
          'Listopad',
          'Grudzień',
        ],
      },
      yaxis: {
        title: {
          text: 'zł',
        },
      },
      fill: {
        opacity: 1,
      },
    },
  };
  return (
    <div>
      <Chart options={data.options} series={data.series} type='bar' height={350} />
    </div>
  );
};
