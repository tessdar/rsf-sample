import { Component, OnInit } from '@angular/core';
import { MainMenuService } from '../../../../shared/services/main-menu.service';

import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-arch-help',
  templateUrl: './arch-help.component.html',
  styleUrls: ['./arch-help.component.scss']
})
export class ArchHelpComponent implements OnInit {

  public folders: TreeNode[];

  constructor(public mainMenu: MainMenuService) { }

  ngOnInit() {
    this.folders =
      [
        {
          'data': {
            'name': 'app',
            'description': '어플리케이션 소스코드가 정의된 최상위 폴더'
          },
          'children': [
            {
              'data': {
                'name': 'layout',
                'description': '어플리케이션 최상위 레이아웃이 정의된 폴더'
              },
              'children': [
                {
                  'data': {
                    'name': 'home',
                    'description': '홈 페이지'
                  }
                },
                {
                  'data': {
                    'name': 'sample-page',
                    'description': '샘플 페이지 모듈 폴더'
                  },
                  'children': [{
                    'data': {
                      'name': 'sample-page-routing.module.ts',
                      'description': '샘플 페이지 라우팅: 하위 컴포넌트 추가 시 라우팅 경로와 컴포넌트 추가'
                    },
                  },
                  {
                    'data': {
                      'name': 'sample-page.module.ts',
                      'description': '샘플 페이지 모듈: 하위 컴포넌트에서 사용하는 모듈을 선언'
                    },
                  },
                  {
                    'data': {
                      'name': 'components',
                      'description': '컴포넌트'
                    },
                    'children': [{
                      'data': {
                        'name': 'basic-crud',
                        'description': '기본 CRUD 컴포넌트'
                      }
                    },
                    {
                      'data': {
                        'name': 'basic-form',
                        'description': '기본 Form 컴포넌트'
                      }
                    },
                    {
                      'data': {
                        'name': 'chart-form',
                        'description': '차트 Form 컴포넌트'
                      }
                    }]
                  },
                  {
                    'data': {
                      'name': 'interfaces',
                      'description': '인터페이스'
                    },
                    'children': [{
                      'data': {
                        'name': 'basic-crud',
                        'description': '기본 CRUD 인터페이스'
                      }
                    },
                    {
                      'data': {
                        'name': 'chart-form',
                        'description': '차트 Form 인터페이스'
                      }
                    }]
                  },
                  {
                    'data': {
                      'name': 'services',
                      'description': '웹 서비스 실행하여 데이터를 가져오는 서비스'
                    },
                    'children': [{
                      'data': {
                        'name': 'basic-crud',
                        'description': '기본 CRUD 서비스'
                      }
                    },
                    {
                      'data': {
                        'name': 'basic-form',
                        'description': '기본 Form 서비스'
                      }
                    },
                    {
                      'data': {
                        'name': 'chart-form',
                        'description': '차트 Form 서비스'
                      }
                    }]
                  }]
                },
                {
                  'data': {
                    'name': 'design-guide',
                    'description': '디자인 가이드'
                  }
                },
                {
                  'data': {
                    'name': 'help-advice',
                    'description': '도움말'
                  }
                }
              ]
            },

            {
              'data': {
                'name': 'login',
                'description': '로그인 소스코드가 정의된 폴더'
              }
            },

            {
              'data': {
                'name': 'not-found',
                'description': '404 Not Found 페이지 소스코드가 정의된 폴더'
              }
            },

            {
              'data': {
                'name': 'shared',
                'description': '공통 소스 코드가 정의된 폴더'
              },
              'children': [{
                'data': {
                  'name': 'enums',
                  'description': '공통 enums'
                },
                'children': [{
                  'data': {
                    'name': 'status.enum.ts',
                    'description': '테이블 상태 정의한 enum 코드 / [주의] 수정하지 말것'
                  }
                }]
              },
              {
                'data': {
                  'name': 'guard',
                  'description': '공통 라우팅 가드'
                },
                'children': [{
                  'data': {
                    'name': 'auth.guard.ts',
                    'description': '로그인 변수가 True인 경우 다음 페이지로 이동 / [주의] 수정하지 말것'
                  }
                },
                {
                  'data': {
                    'name': 'deact.guard.ts',
                    'description': '다음 페이지 이동여부를 설정하는 가드 / [주의] 수정하지 말것'
                  }
                }]
              },
              {
                'data': {
                  'name': 'interfaces',
                  'description': '공통 인터페이스'
                },
                'children': [{
                  'data': {
                    'name': 'table-col.ts',
                    'description': '테이블 컬럼 정의 인터페이스 / [주의] 수정하지 말것'
                  }
                }]
              },
              {
                'data': {
                  'name': 'pipes',
                  'description': '공통 필터'
                },
                'children': [{
                  'data': {
                    'name': 'search-filter.pipe.ts',
                    'description': '입력한 글자가 존재하는 행을 필터링하는 파이프 / [주의] 수정하지 말것'
                  }
                }]
              },
              {
                'data': {
                  'name': 'services',
                  'description': '공통 서비스 코드'
                },
                'children': [{
                  'data': {
                    'name': 'login.service.ts',
                    'description': '로그인 서비스'
                  }
                },
                {
                  'data': {
                    'name': 'main-menu.service.ts',
                    'description': '메인 메뉴 서비스: 메뉴 추가 필요 시 setMenuItems 메서드에 메뉴를 추가한다.'
                  }
                }]
              },
              {
                'data': {
                  'name': 'state',
                  'description': '자동 로그아웃을 위한 상태 및 리듀서 정의'
                },
                'children': [{
                  'data': {
                    'name': 'application',
                    'description': '어플리케이션 리듀서, 액션, 효과 정의 파일이 있는 폴더'
                  },
                  'children': [{
                    'data': {
                      'name': 'actions.ts',
                      'description': '액션 타입 정의 / [주의] 수정하지 말것'
                    }
                  },
                  {
                    'data': {
                      'name': 'effects.ts',
                      'description': '타이머 설정 / [주의] 수정하지 말것'
                    }
                  },
                  {
                    'data': {
                      'name': 'reducer.ts',
                      'description': '상태와 액션에 대한 리듀서 함수 / [주의] 수정하지 말것'
                    }
                  }]
                },
                {
                  'data': {
                    'name': 'reducers.ts',
                    'description': '어플리케이션 리듀서 / [주의] 수정하지 말것'
                  }
                }]
              }]
            }

          ]
        },

        {
          'data': {
            'name': 'assets',
            'description': '아이콘, 이미지, 테마, 언어 등이 있는 폴더'
          },
          'children': [
            {
              'data': {
                'name': 'audio',
                'description': '효과음 관련 파일'
              }
            }, {
              'data': {
                'name': 'fonts',
                'description': '아이콘 폰트 정의된 파일 - 폰트 유니코드와 아이콘 이름이 매핑되어 있다.'
              }
            },
            {
              'data': {
                'name': 'i18n',
                'description': '언어가 정의된 폴더'
              },
              'children': [
                {
                  'data': {
                    'name': 'en.json',
                    'description': '영어 설정 파일'
                  }
                },
                {
                  'data': {
                    'name': 'ko.json',
                    'description': '한국어 설정 파일'
                  }
                }
              ]
            },
            {
              'data': {
                'name': 'icons',
                'description': '아이콘이 정의된 폴더'
              }
            },
            {
              'data': {
                'name': 'images',
                'description': '이미지가 정의된 폴더'
              }
            },
            {
              'data': {
                'name': 'themes',
                'description': 'UI 테마가 정의된 폴더'
              },
              'children': [
                {
                  'data': {
                    'name': 'theme.scss',
                    'description': 'RSM 테마 scss 설정 파일 / 모든 UI 컴포넌트에 일괄적으로 적용되어야 할 때를 제외하고는 수정하지 말것.'
                  }
                }]
            }
          ]
        },

        {
          'data': {
            'name': 'environments',
            'description': '프로파일 설정 파일이 있는 폴더'
          },
          'children': [
            {
              'data': {
                'name': 'environment.prod.ts',
                'description': '운영환경 프로파일: ng build --prod 실행하면 해당 파일에 설정된 변수로 빌드된다.'
              }
            },
            {
              'data': {
                'name': 'environment.ts',
                'description': '개발환경 프로파일'
              }
            }
          ]
        }

      ];
  }

}
