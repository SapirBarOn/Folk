export class User {
      private _id:string;
      private userName:string;
      private password:string;
      private email:string;
      private rythm:number;
      private env:String[];
      private instr:String[];
      private era:String[];

  
  // constructor(
      // public _id:string,
      // public name:string,
  //     public password:string,
  //     public email:string,
  //     public env:[string],
  //     public instr:[string],
  //     public era:[string]) {}

  constructor(){

  }

  public setRythm(r:number){
      this.rythm = r;
  }

  public getRythm(){
      return this.rythm;
  }

  public setId(v : string) {
      this._id = v;
  }

  public getId(){
      return this._id;
  }

  public setUserName(v : string) {
      this.userName = v;
  }

  public getUserName(){
      return this.userName;
  }

   public setPassword(v : string) {
      this.password = v;
  }

  public getPassword(){
      return this.password;
  }

  public setEmail(v : string) {
      this.email = v;
  }

  public getEmail(){
      return this.email;
  }

  public setEnv(v : String[]) {
      this.env = v;
  }

  public getEnv(){
      return this.env;
  }

  public setInstr(v : String[]) {
      this.instr = v;
  }

  public getInstr(){
      return this.instr;
  }

  public setEra(v : String[]) {
      this.era = v;
  }

  public getEra(){
      return this.era;
  }
}