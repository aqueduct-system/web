export type TypeHostMetricLabel = 'RAM' | 'CPU' | 'Disk' | 'Network';
export type TypeHostMetricName = 'ram' | 'cpu' | 'disk' | 'network';

export type TypeHostMetricData = {
    percentage: number;
    total: number;
    used: number;
};

export type TypeHostMetric = {
    metric: TypeHostMetricName;
    label: TypeHostMetricLabel;
    data: TypeHostMetricData;
}
