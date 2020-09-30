import React, { PropsWithChildren } from 'react';

function Content({ children }: PropsWithChildren<{}>) {
    return (
        <main className="container">
            <section className="content">
                {children}
            </section>
        </main>
    );
}

export default Content;
