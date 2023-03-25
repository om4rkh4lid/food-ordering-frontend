export default class Restaurant {
  private _restaurauntId: number;
  private _name: string;
  private _deliveryTime: number;

  constructor(restaurantId: number, name: string, deliveryTime: number) {
    this._restaurauntId = restaurantId;
    this._name = name;
    this._deliveryTime = deliveryTime;
  }
 
  public get restaurauntId(): number {
    return this._restaurauntId;
  }
  public set restaurauntId(value: number) {
    this._restaurauntId = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get deliveryTime(): number {
    return this._deliveryTime;
  }
  public set deliveryTime(value: number) {
    this._deliveryTime = value;
  }

}