import React, { FunctionComponent } from 'react';
import prettyBytes from 'pretty-bytes';

import Card from '../../../components/Card';
import { TypeHostMetric } from '../types';

type HostMetricProps = {
    metric: TypeHostMetric;
}

const HostMetric: FunctionComponent<HostMetricProps> = ({ metric }) => {
    return (
        <div>
            <h3>{metric.label}</h3>
            <span className="text-lg font-bold mr-2">{`${Number(metric.data.percentage.toPrecision(3))}%`}</span>
            <span>{prettyBytes(Number(metric.data.used))}</span>
        </div>
    )
}

type HostCardProps = {
    metrics: TypeHostMetric[];
}

const HostCard: FunctionComponent<HostCardProps> = ({ metrics }) => {
    return (
        <Card className="p-4">
            <h2 className="text-3xl font-bold mb-4 text-gray-700">Host</h2>
            <div className="grid grid-cols-4 grid-flow-row gap-4">
                {metrics.map(metric => <HostMetric key={metric.metric} metric={metric} />)}
            </div>
        </Card>
    );
};

export default HostCard;
