export class Comment {
  public userName: string;
  public comment: string;

  constructor(userName: string, comment: string) {
    console.log("constructor " + userName);
    this.userName = userName;
    this.comment = comment;
  }
}