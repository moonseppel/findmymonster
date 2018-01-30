export class GeneralMonsterInformation {

  public name: string;
  public descriptionAsHtml: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }

}
