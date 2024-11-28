import { XBlockResponseDto } from "../dtos/XBlockInfoResponseDto";
import { IXblockInfo } from "./IXBlockInfo";

export class XBlockInfo implements IXblockInfo {
  private _userId: string;
  private _sectionId: string;
  private _relationId: string;

  constructor({ userId, relationId, sectionId }: XBlockResponseDto) {
    this._userId = userId;
    this._sectionId = sectionId;
    this._relationId = relationId;
  }

  public get userId() {
    return this._userId;
  }

  public get sectionId() {
    return this._sectionId;
  }

  public get relationId() {
    return this._relationId;
  }
}
