 export interface IRequest {
  _id?: string;
  requestedOn: number;
  name: string;
  requestedBy: string;
  email: string;
  postedBy: string;
}