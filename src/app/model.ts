export interface CarManufacturer{
    id: number;
    name: string
}

export interface CarModel{
    id: number,
    name: string,
    modelDetail: ModelDetail
    modelDetailId: number,
    carManufacturer: CarManufacturer,
    carManufacturerId: number
}

export interface ModelDetail{
    id: number,
    yearOfManufacture: number,
    price: number,
    seats: number
}