export interface PostDetail {
  breeds: [];
  id: string;
  url: string;
  width: number;
  height: number;
  categories?: Categories[];
}

export interface Categories {
  id: number;
  name: string;
}
