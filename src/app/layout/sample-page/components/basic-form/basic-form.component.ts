import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';
import { SelectItem } from 'primeng/api';
import { Message } from 'primeng/components/common/api';
import { MessageService } from 'primeng/components/common/messageservice';
//import * as FileSaver from 'file-saver';

import { BasicFormService } from '../../services/basic-form/basic-form.service';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss'],
  providers: [BasicFormService, MessageService]
})
export class BasicFormComponent implements OnInit {

  public deptItems: SelectItem[];
  public jobItems: SelectItem[];

  public msgs: Message[] = [];
  public userform: FormGroup;

  public uploadedFiles: any[] = [];

  public submitted: boolean;
  public imageData: any;
  public showImg: boolean;

  constructor(private sanitizer: DomSanitizer,
    public mainMenu: MainMenuService,
    private fb: FormBuilder,
    private dataProvider: BasicFormService,
    private translate: TranslateService) { }

  /**
   * 화면 초기 설정
   * 드랍다운 리스트 값 불러오는 메서드 실행
   * 드랍다운 리스트 공란 설정하는 행 추가
   * 폼 그룹에 입력체크하는 식별자 설정 
   */
  ngOnInit() {
    this.deptItems = this.getDepList();
    this.jobItems = this.getJobList();

    this.deptItems.unshift({ label: 'Select Department', value: '' });
    this.jobItems.unshift({ label: 'Select Job', value: '' });

    this.userform = this.fb.group({
      'employeeId': new FormControl('', Validators.required),
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'phoneNumber': new FormControl(''),
      'jobId': new FormControl('', Validators.required),
      'departmentId': new FormControl('', Validators.required)
    });

  }

  /**
   * 제출버튼 처리
   * 제출되었다는 변수 true 설정
   * 저장되었다는 메시지 창 출력
   * @param value 
   */
  onSubmit(value: any) {
    this.submitted = true;
    this.translate.get('shared.message').subscribe(msg => {
      this.showMessage('success', msg.success, msg.okSave);
    });
  }

  /**
   * 부서마스터 조회하는 메서드
   * 부서 마슨터 조회하는 웹서비스 호출
   * 불러온 데이터를 PrimeNG 드랍다운 변수 인터페이스에 맞도록 값 대입 후 리턴
   */
  public getDepList(): SelectItem[] {
    let deptItems = [] as SelectItem[];

    this.dataProvider.getDepList().then((res: any[]) => {
      if (res) {
        res.forEach(element => {
          deptItems.push({ 'label': element.departmentName, 'value': element.departmentId });
        });
      }
    });
    return deptItems;
  }

  /**
   * 업무마스터 조회하는 메서드
   * 업무 마스터 조회하는 웹서비스 호출
   * 불러온 데이터를 PrimeNG 드랍다운 변수 언터페이스에 맞도록 값 대입 후 리턴
   */
  public getJobList(): SelectItem[] {
    let jobItems = [] as SelectItem[];

    this.dataProvider.getJobList().then((res: any[]) => {
      if (res) {
        res.forEach(element => {
          jobItems.push({ 'label': element.jobTitle, 'value': element.jobId });
        });
      }
    });
    return jobItems;
  }

  /**
   * 파일 업로드 
   * @param event 
   */
  public onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.translate.get('shared.message').subscribe(msg => {
      this.showMessage('success', msg.success, msg.okSave);
    });
  }

  // onDownload(file) {
  //   this.dataProvider.getFileDownload(file.name).subscribe(res => {
  //     FileSaver.saveAs(res, file.name);
  //   });
  // }

  // onShowImage(file) {
  //   this.dataProvider.getFileDownload(file.name).subscribe(res => {
  //     if (res.type.substring(0, 5) == 'image') {
  //       this.showImg = true;
  //       this.imageData = this.sanitizer.bypassSecurityTrustUrl(
  //         window.URL.createObjectURL(res));
  //     } else {
  //       this.showImg = false;
  //     }
  //   });
  // }

  // onDeleteFile(file) {
  //   this.dataProvider.delFile(file.name).then(res => {
  //     console.log(res);
  //   });
  // }

  /**
 * 메시지 출력하는 메서드 
 * @param severity: 메시지 종류 
 * @param summary: 메시지 헤더
 * @param detail: 메시지 상세내역
 */
  public showMessage(severity: string, summary: string, detail: string) {
    this.msgs = [];
    this.msgs.push({ severity: severity, summary: summary, detail: detail });
  }

}
