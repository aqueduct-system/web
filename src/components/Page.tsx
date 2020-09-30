import React, { PropsWithChildren, ReactNode } from 'react'

type PageProps = {
    title: string;
    actions?: ReactNode;
}

export default function Page({ actions, children, title }: PropsWithChildren<PageProps>) {
    return (
        <section>
            <div className="mb-4 flex flex-row items-center">
                <h1 className="text-3xl font-bold">{title}</h1>
                {actions && (
                    <div className="ml-auto">
                        {actions}
                    </div>
                )}
            </div>
            {children}
        </section>
    )
}