import { Component, OnInit } from '@angular/core';
import { GetDataService } from 'src/app/shared/get-data.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  globalStat: any;
  countryStat: any;
  cols: any[];

  constructor(private getDataService: GetDataService) { }

  ngOnInit() {
    this.getDataService.getGlobalStats().subscribe((res) => {
      this.globalStat = res;
      console.log('global', this.globalStat);
    });

    this.getDataService.getCountryStats().subscribe((res: any) => {
      this.countryStat = res.countries_stat;
      console.log('country', this.countryStat);
    });

    this.cols = [
      { field: 'country_name', header: 'country' },
      { field: 'cases', header: 'cases' },
      { field: 'deaths', header: 'deaths' },
      { field: 'total_recovered', header: 'recovered' },
      { field: 'new_cases', header: 'new cases today' },
      { field: 'new_deaths', header: 'new deaths today' },

    ];
  }

}
