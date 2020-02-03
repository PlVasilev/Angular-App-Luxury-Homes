export interface IListing {
    _id: string;
    title: string;
    description: string;
    address: string;
    yearOfConstruction: number;
    price: number;
    size: number;
    rooms: number;
    postedOn: string;
    postedBy: string;
    imageUrl: string;
  }