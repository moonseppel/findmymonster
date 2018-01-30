export class GeneralMonsterInformation {

  public id: string;
  public items: any;
  public link: any;
  public locale: string;
  public name: string;
  public pubState: string;
  public pubwfCreationDate: string;
  public pubwfLastModificationDate: string;
  public pubwfPublicationDate: string;
  public type: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

  public getName(): string {
    return this.items["findmymonster:name"];
  }

  public getDescriptionAsHtml(): string {
    return this.items["findmymonster:description"].content;
  }

}
