import { LanguageResponseDto } from "../dtos/LanguageResponseDto";
import { ILanguage } from "./ILanguage";

export class Language implements ILanguage {
  private _image: string;
  private _name: string;
  private _template?: string;

  constructor({ image, name, template }: LanguageResponseDto) {
    this._image = image;
    this._name = name;
    this._template = template;
  }

  public get image() {
    return this._image;
  }

  public get name() {
    return this._name;
  }

  public get template() {
    return this._template;
  }
}
