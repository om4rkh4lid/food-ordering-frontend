export default class Restaurant {
  private _restaurantId: number;
  private _name: string;
  private _deliveryTime: number;
  private _categories: string[];
  private _photoUrl: string;

  constructor(restaurantId: number, name: string, deliveryTime: number, categories: string[], photoUrl: string) {
    this._restaurantId = restaurantId;
    this._name = name;
    this._deliveryTime = deliveryTime;
    this._categories = categories;
    this._photoUrl = photoUrl;
  }
 
  public get restaurantId(): number {
    return this._restaurantId;
  }
  public set restaurantId(value: number) {
    this._restaurantId = value;
  }
  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }
  public get photoUrl(): string {
    return this._photoUrl;
  }
  public set photoUrl(value: string) {
    this._photoUrl = value;
  }
  public get deliveryTime(): number {
    return this._deliveryTime;
  }
  public set deliveryTime(value: number) {
    this._deliveryTime = value;
  }
  public get categories(): string[] {
    return this._categories;
  }
  public set categories(value: string[]) {
    this._categories = value;
  }

}