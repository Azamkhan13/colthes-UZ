export interface Data {
  access_token: string,
  age: number,
  email: string,
  first_name: string,
  gender: string,
  id: string,
  last_name: string,
  password: string,
  phone_number: string,
  refresh_token: string
}

export interface PutPostData {
    age: number,
    email: string,
    first_name: string,
    gender: string,
    id: string,
    last_name: string,
    password: string,
}


export interface Request {
    count: number;
    data: Data[];

}