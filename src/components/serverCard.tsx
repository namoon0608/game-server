import clsx from 'clsx';
import { Button } from './ui/button';
import { useState } from 'react';

type Props = {
    item: {
        id: number;
        name: string;
        game: string;
        players: string;
        status: string;
        version: string;
        type: string;
        region: string;
        mods: Array<string>;
    };
};

export function ServerCard({ item }: Props) {
    const [status, setStatus] = useState(item.status);

    return (
        <article
            className={clsx(
                'w-full max-w-sm px-5 flex flex-col justify-between pt-7 pb-5 rounded-lg dark:bg-gray-200 bg-black dark:text-black text-white relative'
            )}
        >
            <span
                className={clsx(
                    'absolute right-5 top-0 tag rounded-none',
                    item.type
                )}
            >
                {item.type}
            </span>
            <div className={clsx('mb-3 flex flex-col gap-2')}>
                <h3
                    className={clsx(
                        'text-body-bold pl-5 relative before:absolute before:top-2 before:left-0 before:block before:w-2.5 before:h-2.5 before:rounded-full',
                        status === 'online'
                            ? 'before:bg-green-500'
                            : 'before:bg-gray-400'
                    )}
                >
                    {item.game}{' '}
                    <span className={clsx('text-small-bold')}>
                        v.{item.version}
                    </span>
                </h3>
                <p>Server: {item.name}</p>
                <p>Region: {item.region}</p>
                <p>
                    {item.players} player
                    {Number(item.players.split('/')[0]) > 1 ? 's' : ''} online
                </p>
            </div>

            <section
                className={clsx(
                    'flex justify-between flex-wrap items-end gap-x-2 gap-y-4'
                )}
            >
                <div
                    className={clsx(
                        'flex-1 flex flex-wrap items-center gap-1.5'
                    )}
                >
                    {item.mods.map((mod) => (
                        <span className={clsx('tag bg-orange-500')} key={mod}>
                            {mod}
                        </span>
                    ))}
                </div>
                <Button
                    className={clsx('rounded-full')}
                    onClick={() => {
                        const newStatus =
                            status === 'online' ? 'offline' : 'online';

                        setStatus(newStatus); // Update the state
                    }}
                    variant={status === 'online' ? 'destructive' : 'default'}
                >
                    {status === 'online' ? 'Stop' : 'Start'} Server
                </Button>
            </section>
        </article>
    );
}
