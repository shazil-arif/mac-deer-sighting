export type Data = {
    lat: number,
    lng: number,
    picture: string,
    animal: Animal,
    timestamp: Date,
    description: string
};

export enum Animal {
    Deer,
    Rat,
    Skunk,
    Bear
}

export const animals = [
    'Deer',
    'Rat',
    'Skunk',
    'Bear',
]