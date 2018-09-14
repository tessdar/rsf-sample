/**
 * 막대차트 데이터 조회 인터페이스
 */
export interface BarChartSet {
    labels: string[];
    datasets: DataSet[];
}

interface DataSet{
    label?: string,
    backgroundColor?: string,
    borderColor?: string,
    hoverBackgroundColor?: string[],
    data: any[]
}