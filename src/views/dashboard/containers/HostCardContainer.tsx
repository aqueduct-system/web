import React, { FunctionComponent } from 'react';
import useSWR from 'swr';

import HostCard from '../components/HostCard';
import { TypeHostMetric, TypeHostMetricData, TypeHostMetricLabel, TypeHostMetricName } from '../types';

function getLabelFromName(name: string): TypeHostMetricLabel {
    switch (name) {
        case 'cpu': return 'CPU'
        case 'disk': return 'Disk'
        case 'ram': return 'RAM'
        case 'network': return 'Network'
    }
    throw new Error('Unknown name');
}

function getMetrics(data: any) {
    if (!data) return [];

    return (Object.entries<TypeHostMetricData>(data)).reduce((acc: TypeHostMetric[], [key, val]) => {
        const metric = key as TypeHostMetricName;
        acc.push({ metric, label: getLabelFromName(key), data: val })
        return acc;
    }, []);
}

const HostCardContainer: FunctionComponent = () => {
    const { data, error } = useSWR('/stats');

    if (error || !data) return null;

    return <HostCard metrics={getMetrics(data)} />
};

export default HostCardContainer;
