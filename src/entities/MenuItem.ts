export default class MenuItem {
  private _id: number;
  private _restaurantId: number;
  private _name: string;
  private _price: number;
  private _photo: string;
  private _description: string;

  constructor(id: number, name: string, price: number, description: string, photo: string, restaurantId: number) {
    this._id = id;
    this._restaurantId = restaurantId;
    this._name = name;
    this._price = price;
    this._description = description;
    this._photo = photo;
  }
 
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
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
  public get photo(): string {
    return this._photo;
  }
  public set photo(value: string) {
    this._photo = value;
  }
  public get price(): number {
    return this._price;
  }
  public set price(value: number) {
    this._price = value;
  }
  public get description(): string {
    return this._description;
  }
  public set description(value: string) {
    this._description = value;
  }

}