import {GeneralMonsterInformation} from "./general-monster-information";

export class HippoContentResponse {

  public count: number;
  public items: Array<GeneralMonsterInformation>;
  public max: number;
  public more: boolean;
  public offset: number;
  public total: number;

}
