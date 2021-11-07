export interface JokeDto {
  name: string,
  text: string,
  rate?: number,
  like?: number,
  view?: number,
  userId: string
}