import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcodeScanComponent } from './barcode-scan.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ZXingScannerModule } from '@zxing/ngx-scanner';

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

describe('BarcodeScanComponent', () => {
  let component: BarcodeScanComponent;
  let fixture: ComponentFixture<BarcodeScanComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BarcodeScanComponent],
      imports: [HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        }),
        ZXingScannerModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarcodeScanComponent);
    component = fixture.componentInstance;
    component.currentDevice = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
