export class Song {
  public songName: string;
  public singerName: string;
  public name:string;
  public time:string;
  public likes:number;
  public songImg:string;
  public youtubeID:string;

  constructor(public _id:string,songName: string, singerName: string, name: string, time: string, likes: number , songImg:string , youtubeID:string) {
    console.log("constructor " + singerName);
    this.songName = songName;
    this.singerName = singerName;
    this.name = name;
    this.time = time;
    this.likes = likes;
    this.songImg = songImg;
    this.youtubeID = youtubeID;
  }
}