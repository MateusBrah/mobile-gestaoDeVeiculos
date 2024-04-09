import { Realm } from '@realm/react';
import { CoordsSchemaProps } from './Coords';

export type GenerateProps = {
  userId: string;
  description: string;
  plate: string;
  coords: CoordsSchemaProps[];
  createdAt?: Date;
  updatedAt?: Date;
  status?: string;
}

export class Historic extends Realm.Object<Historic> {
  _id!: string;
  userId!: string;
  plate!: string;
  description!: string;
  coords!: CoordsSchemaProps[];
  status!: string;
  createdAt!: Date;
  updatedAt!: Date;

  static generate({ userId, description, plate, coords }: GenerateProps) {
    return {
      _id: new Realm.BSON.UUID(),
      userId,
      description,
      plate,
      coords,
      status: 'departure',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
  }

  static schema: Realm.ObjectSchema = {
    name: 'Historic',
    properties: {
      _id: 'uuid',
      userId: {
        type: 'string',
        indexed: true,
      },
      plate: 'string',
      description: 'string',
      coords: {
        type: 'list',
        objectType: 'Coords',
      },
      status: 'string',
      createdAt: 'date',
      updatedAt: 'date',
    },
    primaryKey: '_id',
  }
}