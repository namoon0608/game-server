'use client';
import { useEffect, useState } from 'react';
import { ModeToggle } from '@/components/modeToggle';
import clsx from 'clsx';
import { ServerCard } from '@/components/serverCard';

/*
  Welcome to the simplegamehosting coding assignment!

  if you got this far great job! 🎉
  Now it's your turn to shine! 🌟
  
  The mock data is fetched from the server and displayed on the page.

  Your task is to create a dynamic card component for each server in the list.
  - The card should display the server's name, game, players, status, version etc, bonus points for displaying any extra data from the json response.
  - please use tailwind to style your components, you can use the existing styles in this file as a reference.
  - You can also use any other libraries you like to help you build the UI.
  
  for extra info please read the README.md file in the root of the project.
*/

type Server = {
    id: number;
    name: string;
    game: string;
    players: string;
    status: string;
    version: string;
    type: string;
    region: string;
    mods: string[];
};

export default function Home() {
    const [serverData, setServerData] = useState<Server[] | null>(null);
    // you can update this fetching code if required but it's not necessary for the assignment.
    useEffect(() => {
        const fetchServerData = async () => {
            try {
                const response = await fetch('/api/mock');
                const data = await response.json();
                setServerData(data);
            } catch (error) {
                console.error('Failed to fetch server data:', error);
            }
        };

        fetchServerData();
    }, []);

    return (
        <div
            className={clsx(
                'grid grid-rows-[auto_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'
            )}
        >
            {/* main can be deleted and replaced with your own cards */}
            <ModeToggle />
            <main
                className={clsx(
                    'flex flex-col gap-8 row-start-2 items-center justify-center w-full'
                )}
            >
                <h1 className={clsx('text-2xl font-bold')}>
                    Minecraft Server List
                </h1>
                <section
                    className={clsx(
                        'w-full flex flex-wrap justify-center gap-x-3 gap-y-5'
                    )}
                >
                    {serverData ? (
                        <>
                            {serverData.map(
                                (server: {
                                    id: number;
                                    name: string;
                                    game: string;
                                    players: string;
                                    status: string;
                                    version: string;
                                    type: string;
                                    region: string;
                                    mods: Array<string>;
                                }) => (
                                    <ServerCard key={server.id} item={server} />
                                )
                            )}
                        </>
                    ) : (
                        'Loading data...'
                    )}
                </section>
            </main>
            {/* main can be deleted and replaced with your own cards */}
        </div>
    );
}
