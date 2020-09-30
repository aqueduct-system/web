import React from 'react'
import { Aqueduct } from '@aqueduct-system/types';

import Page from '../../components/Page';
import Form, { FormValuesWithRules } from '../../components/form/Form';
import api from '../../api';
import { useNavigate } from 'react-router-dom';

const params: FormValuesWithRules<Aqueduct.ServerAttributes> = [
    {
        name: 'world_name',
        label: 'World Name',
        description: "This name will be used as the world's name in-game.",
        type: 'text',
        rules: {
            required: 'World name is required',
        }
    },
    {
        name: 'motd',
        label: 'Message of the Day',
        description: "This message will be displayed on the server browser in the Minecraft client.",
        type: 'text',
    },
    {
        name: 'ip',
        label: 'IP Address',
        description: "The IP Address the server is running on.",
        type: 'text',
        rules: {
            required: 'IP Address is required',
            pattern: {
                value: /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
                message: 'Invalid format for IP Address',
            },
        },
    },
    {
        name: 'port',
        label: 'Port',
        description: 'The port the server is running on.',
        type: 'number',
        rules: {
            pattern: {
                value: /^\d+$/,
                message: 'Port must be a number',
            },
        },
    },
    {
        name: 'path',
        label: 'Server Path',
        description: "The full path to the directory or folder containing the Minecraft server JAR.",
        type: 'text',
        rules: {
            required: 'Server path is required',
        },
    },
    {
        name: 'jar_name',
        label: 'Server JAR',
        description: "The name of the JAR file.",
        type: 'text',
        rules: {
            required: 'Server JAR name is required',
        },
    },
    {
        name: 'properties',
        label: 'Properties',
        type: 'textarea',
    }
];

const defaultValues = {
    ip: '192.168.1.1',
    port: 25565,
}

export default function NewServerView() {
    const navigate = useNavigate();

    async function onSubmit(data: Aqueduct.ServerAttributes) {
        console.log(data);
        const res = await api.post('/servers', data);
        if (res.data) {
            navigate(`servers/${res.data.id}`)
        }
    }

    return (
        <Page title="Add Server">
            <div className="w-2/4 mx-auto py-8">
                <Form<Aqueduct.ServerAttributes>
                    defaultValues={defaultValues}
                    params={params}
                    onSubmit={onSubmit}
                />
            </div>
        </Page>
    );
}
