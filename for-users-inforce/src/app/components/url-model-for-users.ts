export class UrlModelForUsers {
  constructor(
    public id: number,
    public fullUrl: string,
    public description: string | null,
    public haveDeleteButton: boolean
  ) {}
}
