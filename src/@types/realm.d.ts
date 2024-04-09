
interface IHistoric {
  _id: string;
  plate: string;
  description: string;
  status: string;
  updatedAt: Date;
  coords: ICoords[];
}
