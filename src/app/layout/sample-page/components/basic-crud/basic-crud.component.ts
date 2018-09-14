import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
import { BasicCrudService } from '../../services/basic-crud/basic-crud.service';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { _Status } from '../../../../shared/enums/status.enum';
import { TableCol } from '../../../../shared/interfaces/table-col';
import { DataSet } from '../../interfaces/basic-crud/data-set';
import { SaveSet } from '../../interfaces/basic-crud/save-set';

@Component({
  selector: 'app-basic-crud',
  templateUrl: './basic-crud.component.html',
  styleUrls: ['./basic-crud.component.scss'],
  providers: [MessageService, BasicCrudService, ConfirmationService]
})
export class BasicCrudComponent implements OnInit {

  public cols: TableCol[] = [];  // 테이블 컬럼 
  public dataRow = {} as DataSet; // 행 추가, 삭제를 위한 변수
  public dataList: DataSet[] = []; // 테이블 데이터 리스트
  public totalRecords: number = 0; // 총 건수
  public selectedRows: DataSet[] = []; // 선택한 행
  public delList: DataSet[] = []; // 삭제 데이터 저장 리스트
  public loading: boolean; // 로딩 Spinner 출력여부
  public onFilter: string; // 필터 행 적용 클래스 변수
  public editable = false as boolean; // 데이터 테이블 수정여부 

  public displayDialog: boolean; // 추가, 수정 다이얼로그 출력 변수
  public departmentId: string; // 조회조건

  public msgs: Message[] = []; // i18n 텍스트 변환 변수

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    public mainMenu: MainMenuService,
    private basicCrudService: BasicCrudService,
    private translate: TranslateService) { }

  /**
   * 화면 초기화 설정
   * 부서코드 초기값 설정
   * 데이터 테이블 컬럼 초기설정
   * 컬럼의 폭은 em으로 설정할 것 - 반응형 웹 설정을 하기 위함.
   * 컬럼 필터 비활성화 설정
   */
  ngOnInit() {
    this.departmentId = "50";

    this.cols = [
      { field: 'employeeId', header: 'samplePage.basicCrud.employeeId', width: "4.5em", editable: false },
      { field: 'firstName', header: 'samplePage.basicCrud.firstName', width: "8em", editable: true },
      { field: 'lastName', header: 'samplePage.basicCrud.lastName', width: "8em", editable: true },
      { field: 'phoneNumber', header: 'samplePage.basicCrud.phoneNumber', width: "8.5em", editable: true },
      { field: 'jobId', header: 'samplePage.basicCrud.jobId', width: "7em", editable: false },
      { field: 'departmentId', header: 'samplePage.basicCrud.departmentId', width: "6.5em", editable: false },
      { field: 'managerId', header: 'samplePage.basicCrud.managerId', width: "7em", editable: false },
      { field: 'email', header: 'samplePage.basicCrud.email', width: "8em", editable: false },
      { field: 'hireDate', header: 'samplePage.basicCrud.hireDate', width: "9.5em", editable: false },
      { field: 'departmentName', header: 'samplePage.basicCrud.departmentName', width: "8em", editable: false },
      { field: 'locationId', header: 'samplePage.basicCrud.locationId', width: "5em", editable: false }
    ];

    this.onFilter = "ui-table-filter-inactive";
  }

  /**
   * 수정한 내역이 있는데 화면을 나가려고 하는 경우 경고 메시지 출력하는 메서드
   * true: 화면이동 / false: 화면이동하지 않음.
   */
  public canDeactivate(): boolean {
    if (this.saveCheck()) {
      return this.askQuit();

    } else {
      return true;
    }
  }

  /**
   * 데이터 조회하는 메서드
   * 1. 로딩 Spinner 출력변수 true / 총건수 초기화 / 데이터 테이블 초기화 / selectRows 초기화
   * 2. 데이터조회 API 호출
   * 3. Requestbody에 아무런 값이 없으면 정보 메시지 출력
   * 4. 응답실패(에러)가 발생한 경우 에러 메시지 출력
   * 5. 정상적으로 데이터 호출한 경우 데이터 테이블에 리턴값 대입 / 총건수 변수에 리턴값 length를 대입
   * 6. 로딩 Spinner 출력변수 false
   * @param departmentId: 부서코드 
   */
  public retrieve(departmentId: string) {
    this.loading = true;
    this.totalRecords = 0;
    this.dataList = [];
    this.selectedRows = [];

    this.basicCrudService.getEmpList(departmentId).then((res: any) => {
      if (!res) {
        this.translate.get('shared.message').subscribe(msg => {
          this.showMessage('info', msg.info, msg.dataNotFound);
        });

      } else {
        if (res.ok == false) {
          this.translate.get('shared.message').subscribe(msg => {
            this.showMessage('error', msg.error, 'Status: ' + res.status + ', ' + res.statusText);
          });

        } else {
          this.dataList = res;
          this.totalRecords = res.length;

        }
      }
      this.loading = false;

    });
  }

  /**
   * 데이터 추가하는 메서드
   * 추가 버튼 클릭한 경우 데이터 맨 앞 행 추가
   * 총 데이터 건수에 반영
   * 수정 버튼 클릭한 경우 다이얼로그 창에 입력한 값이 선택한 행에 반영.
   */
  public dialogOk() {
    let dataList = [...this.dataList];

    dataList.unshift(this.dataRow);

    this.dataList = dataList;
    this.totalRecords = this.dataList.length;

    this.dataRow = null;
    this.displayDialog = false;
  }

  /**
   * 데이터 추가 다이얼로드 출력하는 메서드
   * 행 타입이 신규인 경우 상태를 New로 대입.
   */
  public add() {
    this.dataRow = {} as DataSet;
    this.dataRow._status = _Status.New;

    this.displayDialog = true;
  }

  /**
   * 수정모드 On/Off
   */
  public edit() {
    this.editable = !this.editable;
  }

  /**
   * 선택한 행 삭제하는 메서드
   * 선택한 행이 없는 경우 경고 메시지 출력 후 리턴
   * 선택한 행이 존재하는 경우 선택한 행을 데이터 테이블에서 삭제 (데이터 테이블에서 역순으로 제거)
   * 선택한 행 배열 초기화 / 총 건수 변수 반영
   */
  public delete() {

    if (!this.selectedRows) {
      this.translate.get('shared.message').subscribe(msg => {
        this.showMessage('warn', msg.warn, msg.noSelected);
      });
      return;

    } else {
      if (this.selectedRows.length < 1) {
        this.translate.get('shared.message').subscribe(msg => {
          this.showMessage('warn', msg.warn, msg.noSelected);
        });
        return;

      }
    }

    for (let i = this.dataList.length - 1; i >= 0; i--) {
      let index = this.dataList.indexOf(this.selectedRows[i])

      if (index >= 0) {
        this.delList.unshift(this.dataList[index]);
        this.dataList.splice(index, 1);

      }
    }
    this.selectedRows = [];
    this.totalRecords = this.dataList.length;

  }

  /**
   * 필터토글
   * 필터 버튼 클릭 시 필터 비활성화 / 다시 클릭하면 필터 행 활성화
   */
  public filter() {
    if (this.onFilter == "ui-table-filter") {
      this.onFilter = "ui-table-filter-inactive";
    } else {
      this.onFilter = "ui-table-filter";
    }
  }

  /**
   * 셀 변경 시 변경한 행과 필드, 값을 가져오는 메서드
   * @param idx : 수정한 행
   * @param fld : 수정한 필드
   * @param val : 수정한 값
   */
  public onChangeCell(idx: number, fld: string, val: any) {
    this.dataList[idx]._status = _Status.Modified;
  }

  /**
   * 데이터 저장하는 메서드
   * 데이터 로딩 Spinner 활성화
   * 데이터 저장하는 배열에 수정 또는 추가된 데이터 테이블 값을 대입
   * 데이터 삭제 리스트에 대입된 리스트를 데이터 저장 배열에 대입 / 상태를 삭제로 하여 대입 후 삭제 리스트 초기화
   * 삭제 데이터 저장된 배열에 값이 하나도 없는 경우 경고 메시지 출력 후 리턴
   * 삭제 데이터 저정하는 배열에 값이 존재하는 경우 저장할 것인지를 묻는 팝업창이 열림
   * "예"를 클릭한 경우 데이터 저장하는 웹서비스 호출
   * 데이터 로딩 Spinner 비활성화
   * 응답이 없는 경우 에러 메시지 출력 후 리턴
   * 응답이 false 인 경우 에러 메시지 출력 후 리턴
   * 응답이 true 인 경우 저장 완료되었다는 메시지 출력
   * 데이터 저장하는 배열 변수 초기화
   */
  public save() {
    this.loading = true;

    let saveList: SaveSet[] = [];
    let saveRow = {} as SaveSet;

    for (let i = 0; i < this.dataList.length; i++) {

      if (this.dataList[i]._status == _Status.New || this.dataList[i]._status == _Status.Modified) {
        saveRow.employeeId = this.dataList[i].employeeId;

        saveRow.employeeId = this.dataList[i].employeeId;
        saveRow.firstName = this.dataList[i].firstName;
        saveRow.lastName = this.dataList[i].lastName;
        saveRow.phoneNumber = this.dataList[i].phoneNumber;
        saveRow.jobId = this.dataList[i].jobId;
        saveRow.departmentId = this.dataList[i].departmentId;
        saveRow.managerId = this.dataList[i].managerId;
        saveRow.email = this.dataList[i].email;
        saveRow._status = this.dataList[i]._status;

        saveList.unshift(saveRow);
        saveRow = {} as SaveSet;
      }

    }

    saveRow = {} as SaveSet;
    for (let i = 0; i < this.delList.length; i++) {
      if (this.delList[i]._status != _Status.New) {
        saveRow.employeeId = this.delList[i].employeeId;
        saveRow._status = _Status.Delete;

        saveList.unshift(saveRow);
        saveRow = {} as SaveSet;
      }
    }

    if (saveList.length < 1) {
      this.loading = false;
      this.translate.get('shared.message').subscribe(msg => {
        this.showMessage('info', msg.info, msg.noSaveData);
      });
      return;

    } else {
      this.translate.get('shared.message').subscribe(msg => {

        this.confirmationService.confirm({
          message: msg.confProc,
          header: msg.confm,
          icon: 'fa fa-question-circle',
          accept: () => {
            this.basicCrudService.setEmp(saveList).then((res: any) => {
              this.loading = false;

              if (!res) {
                this.showMessage('error', msg.error, msg.noResponse);

              } else {
                if (res.ok == false) {
                  this.showMessage('error', msg.error + ' / ' + res.status, res.error.message);

                } else {
                  this.delList = [];
                  saveList = [];

                  this.showMessage('success', msg.success, res.message);
                  this.retrieve(this.departmentId);
                }
              }

            });

          },
          reject: () => {
            this.loading = false;
            return;
          }
        });
      });
    }

  }

  /**
   * 저장여부 체크
   * 수정한 내역이 있는 경우 true / 없는 경우 false
   */
  private saveCheck(): boolean {

    // 수정여부 체크
    for (let i = 0; i < this.dataList.length; i++) {
      if (this.dataList[i]._status == _Status.New || this.dataList[i]._status == _Status.Modified) {
        return true;
      }
    }

    // 삭제여부 체크
    for (let i = 0; i < this.delList.length; i++) {
      if (this.delList[i]._status != _Status.New) {
        return true;
      }
    }

    return false;
  }

  /**
   * 
   */
  private askQuit(): any {

    return new Promise(resolve => {
      this.translate.get('shared.message').subscribe(msg => {
        this.confirmationService.confirm({
          message: msg.askQuit,
          header: msg.confm,
          icon: 'fa fa-question-circle',
          accept: () => {
            resolve(true);
          },
          reject: () => {
            this.translate.get('main.sideMenu').subscribe(res => {
              this.mainMenu.setBreadKeys([
                { 'key': 'samplePage' },
                { 'key': 'basicCrud' }
              ], res);
            });
            resolve(false);
          }
        });
      });
    })
  }

  /**
   * 메시지 출력하는 메서드 
   * @param severity: 메시지 종류 
   * @param summary: 메시지 헤더
   * @param detail: 메시지 상세내역
   */
  private showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
