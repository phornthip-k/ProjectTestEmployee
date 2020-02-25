export class DummyApi {
    public status: string;
    public data: any;

    constructor(apiData?: any) {
      if (apiData) {
        this.status = apiData.status;
        this.data = apiData.data;
      }
    }
    static fromObject(obj: any): DummyApi {
      return new DummyApi({ status: obj.status, data: obj.data });
    }
    public isSuccess(): boolean {
      if (this.status.toString().toLowerCase() === 'true') { return true; }
      return false;
    }
  }
