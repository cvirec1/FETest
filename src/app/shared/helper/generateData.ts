export function makeBrand(): string {
    const brands = ['Acura', 'Audi', 'BMW', 'Citroen', 'Chevrolet', 'Dodge', 'Lexus', 'Ferrari', 'Jeep', 'Kia', 'Mazda', 'Mercedes-Benz'];
    return brands[randomIndex(brands.length)];
}

export function makeColor(): string {
    const colors = ['black', 'white', 'red', 'gray', 'silver', 'blue', 'green', 'rainbow'];
    return colors[randomIndex(colors.length)];
}

export function makePrice(): number {
    const price = Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000;
    return Math.round(price / 1000) * 1000;
}

export function makeYear(): number {
    return Math.floor(Math.random() * (2021 - 2001 + 1)) + 2001;
}

export function randomIndex(max: number): number{
return Math.floor(Math.random() * max);
}
