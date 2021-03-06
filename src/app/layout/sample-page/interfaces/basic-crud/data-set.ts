/**
 * 샘플 데이터 조회하는 인터페이스
 */
export interface DataSet {
    employeeId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    jobId: string;
    departmentId: number;
    managerId: number;
    email: string;
    hireDate: Date;
    departmentName: string;
    locationId: number;
    _status?: number;
}

/**
 * 샘플 데이터 저장하는 인터페이스
 */
export interface SaveSet {
    employeeId: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    jobId: string;
    departmentId: number;
    managerId: number;
    email: string;
    _status?: number;
}
