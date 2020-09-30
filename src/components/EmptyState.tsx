import React, { ReactNode } from 'react'

type EmptyStateProps = {
    image: string;
    imageAlt: string;
    headline: string;
    byline?: string;
    action?: ReactNode; 
}

export default function EmptyState({ byline, image, imageAlt, headline, action }: EmptyStateProps) {
    return (
        <div className="w-full px-32 py-8 flex flex-col items-center">
            <img src={image} alt={imageAlt} className="mb-4" />
            <h2 className="font-semibold text-lg mb-4">{headline}</h2>
            {byline && (<p className="mb-8">{byline}</p>)}
            {action && (
                {action}
            )}
        </div>
    );
}