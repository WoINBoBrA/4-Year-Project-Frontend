import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnInit,
  ViewChild
} from '@angular/core';
import { formatDate } from '@angular/common'; 
import { getStyle } from '@coreui/utils/src';
import { ChartjsComponent } from '@coreui/angular-chartjs';
import { AnalyticsService } from 'src/app/services/analytics.service';
import { takeWhile } from 'rxjs';
import { TicketState } from 'src/app/models/ticket.model';

@Component({
  selector: 'app-widgets-dropdown',
  templateUrl: './widgets-dropdown.component.html',
  styleUrls: ['./widgets-dropdown.component.scss']
})
export class WidgetsDropdownComponent implements OnInit, AfterContentInit {

  constructor(
    private analyticsService: AnalyticsService,
  ) {}

  data: any[] = [];
  options: any[] = [];
  titles: string[] = [
    "Выполненные заявки",
    "Поступившие заявки",
    "Отменнённые заявки"
  ];
  labels = [
    formatDate(new Date(Date.now() - 6*24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now() - 5*24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now() - 4*24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now() - 3*24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now() - 2*24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now() - 24*60*60*1000),"dd.MM.YYYY","en-US"),
    formatDate(new Date(Date.now()),"dd.MM.YYYY","en-US")
  ];

  datasets: any = [
    [{
      label: 'Выполненные заявки',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-success'),
      pointHoverBorderColor: getStyle('--cui-success'),
      data: [],
      fill: true
    }], [{
      label: 'Заявки в работе',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-danger'),
      pointHoverBorderColor: getStyle('--cui-danger'),
      data: [],
      fill: true
    }], [{
      label: 'Отменнённые заявки',
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
      pointBackgroundColor: getStyle('--cui-dark'),
      pointHoverBorderColor: getStyle('--cui-dark'),
      data: [],
      fill: true
    }]
  ];


  optionsDefault = {
    plugins: {
      legend: {
        display: false
      }
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      }
    },
    elements: {
      line: {
        borderWidth: 2,
        tension: 0.4
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4
      }
    }
  };

  ngOnInit(): void {
    this.setData();
  }

  ngAfterContentInit(): void {
  }

  setData() {
    this.analyticsService.weekly().subscribe((data) => {
      for(let i = 0; i < this.labels.length; i++){
        let COMPLETED = data[1].find((element) => element.date == this.labels[i])?.ticketCount ?? 0;
        let INWORK = data[0].find((element) => element.date == this.labels[i])?.ticketCount ?? 0;
        let CANCELED = data[2].find((element) => element.date == this.labels[i])?.ticketCount ?? 0;
        
        this.datasets[0][0].data.push(COMPLETED);
        this.datasets[1][0].data.push(INWORK);
        this.datasets[2][0].data.push(CANCELED);
      }

      for (let idx = 0; idx < 4; idx++) {
        this.data[idx] = {
          labels: this.labels,
          datasets: this.datasets[idx]
        };
      }

    });

  }

 
}