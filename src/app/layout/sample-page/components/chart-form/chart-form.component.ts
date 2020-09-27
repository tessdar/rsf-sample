import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

import { ChartFormService } from '../../services/chart-form/chart-form.service';
import { BarChartSet } from '../../interfaces/chart-form/bar-chart-set';
import { PieChartSet } from '../../interfaces/chart-form/pie-chart-set';

@Component({
  selector: 'app-chart-form',
  templateUrl: './chart-form.component.html',
  styleUrls: ['./chart-form.component.scss'],
  providers: [ChartFormService]
})
export class ChartFormComponent implements OnInit {

  public dataDepChart = {} as BarChartSet;
  public dataJobChart = {} as PieChartSet;

  public data: any;

  constructor(public mainMenu: MainMenuService,
    private chartFormService: ChartFormService) { }

  /**
   * 화면 초기 설정
   * 차트 부서 데이터 조회하는 메서드 실행
   * 차트 업무 데이터 조회하는 메서드 실행
   */
  ngOnInit() {
    this.getDepChart();
    this.getJobChart();
  }

  /**
   * 부서마스터 조회하는 메서드
   * 차트부서 정보 조회하는 웹 서비스 호출
   * 응답 변수가 false가 아닌 경우
   * 부서명을 label 배열에 부서 count 값을 data 배열에 각각 대입
   * 차트 정보 출력하기 위해 PrimeNG 차트 인터페이스에 값을 설정
   */
  public getDepChart() {
    const label = [] as any[];
    const data = [] as any[];

    this.chartFormService.getDepChart().then((res: any) => {
      if (!res) {

      } else {
        if (res.ok === false) {

        } else {
          res.forEach(element => {
            label.push(element.departmentName);
            data.push(element.depCnt);
          });

          this.dataDepChart = {
            labels: label,
            datasets: [
              {
                label: 'Department Status',
                backgroundColor: '#42A5F5',
                borderColor: '#1E88E5',
                data: data
              }
            ]
          };

        }
      }

    });
    // return dataSet;
  }

  /**
   * 업무마스터 조회하는 메서드
   * 차트업무 정보 조회하는 웹 서비스 호출
   * 응답 변수가 false가 아닌 경우
   * 부서명을 label 배열에 업무 count 값을 data 배열에 각각 대입
   * 차트 정보 출력하기 위해 PrimeNG 차트 인터페이스에 값을 설정
   */
  public getJobChart() {
    const label = [] as any[];
    const data = [] as any[];

    this.chartFormService.getJobChart().then((res: any) => {
      if (!res) {

      } else {
        if (res.ok === false) {

        } else {
          res.forEach(element => {
            label.push(element.jobTitle);
            data.push(element.jobCnt);
          });

          this.dataJobChart = {
            labels: label,
            datasets: [
              {
                backgroundColor: [
                  '#FF6384',
                  '#4BC0C0',
                  '#FFCE56',
                  '#36A2EB'],
                hoverBackgroundColor: [
                  '#FF6384',
                  '#4BC0C0',
                  '#FFCE56',
                  '#36A2EB'],
                data: data
              }
            ]
          };

        }
      }

    });
  }

}
