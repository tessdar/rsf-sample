/**
 * 파이차트 데이터 조회 인터페이스
 */
export interface PieChartSet {
    labels: string[];
    datasets: DataSet[];
}

export interface DataSet {
    label?: string;
    backgroundColor?: string[];
    borderColor?: string[];
    hoverBackgroundColor?: string[];
    data: any[];
}
