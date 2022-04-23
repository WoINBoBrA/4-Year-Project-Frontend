import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils/src';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { TicketState } from 'src/app/models/ticket.model';

export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  constructor(private analyticsService: AnalyticsService) {
  }

  public mainChart: IChartProps = {};

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  GetMainChart(){
    this.initMainChart();
    return this.mainChart;
  }

  initMainChart() {
    const brandSuccess = getStyle('--cui-success') ?? '#2eb85c';
    const brandSuccessBg = hexToRgba(getStyle('--cui-success'), 10) ?? '#2eb85c';
    const brandWarning = getStyle('--cui-warning') ?? '#f9b115';
    const brandWarningBg = hexToRgba(getStyle('--cui-warning'), 10) ?? '#f9b115';
    const brandDanger = getStyle('--cui-danger') || '#e55353';
    const brandDangerBg = hexToRgba(getStyle('--cui-danger'), 10) || '#e55353';

    // mainChart
    // mainChart
    this.mainChart['elements'] = 12;
    this.mainChart['COMPLETED'] = [];
    this.mainChart['INWORK'] = [];
    this.mainChart['CLOSED'] = [];



    
    this.analyticsService.yearly().subscribe((data) => {

      for (let i = 0; i <= this.mainChart['elements']; i++) {
        let COMPLETED = data[0].find((element) => element.month == labels[i])?.ticketCount ?? 0;
        let INWORK = data[1].find((element) => element.month == labels[i])?.ticketCount ?? 0;
        let CLOSED = data[2].find((element) => element.month == labels[i])?.ticketCount ?? 0;

        this.mainChart['COMPLETED'].push(COMPLETED);
        this.mainChart['INWORK'].push(INWORK);
        this.mainChart['CLOSED'].push(CLOSED);
      }
    });

    // generate random values for mainChart


    let labels: string[] = [
      '01.2022',
      '02.2022',
      '03.2022',
      '04.2022',
      '05.2022',
      '06.2022',
      '07.2022',
      '08.2022',
      '09.2022',
      '10.2022',
      '11.2022',
      '12.2022'
    ];

    const colors = [
      {
        // brandInfo
        backgroundColor: brandSuccessBg,
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        fill: true
      },
      {
        // brandInfo
        backgroundColor: brandWarningBg,
        borderColor: brandWarning,
        pointHoverBackgroundColor: brandWarning,
        borderWidth: 2,
        fill: true
      },
      {
        // brandDanger
        backgroundColor: brandDangerBg,
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 2,
        fill: true
      }
    ];

    const datasets = [
      {
        data: this.mainChart['COMPLETED'],
        label: 'Выполненные',
        ...colors[0]
      },
      {
        data: this.mainChart['INWORK'],
        label: 'В работе',
        ...colors[1]
      },
      {
        data: this.mainChart['CLOSED'],
        label: 'Закрытые',
        ...colors[2]
      }
    ];

    const plugins = {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          labelColor: function(context: any) {
            return {
              backgroundColor: context.dataset.borderColor
            };
          }
        }
      }
    };

    const options = {
      maintainAspectRatio: false,
      plugins,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5)
          }
        }
      },
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels
    };
  }

}
