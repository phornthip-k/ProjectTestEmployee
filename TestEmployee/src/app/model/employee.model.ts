export class employeeModel {
    public firstname: string;
    public lastname: string;
    public birthday: string;
    public email: string;
  
    constructor(data?: any) {
      if (data) {
        this.firstname = data.firstname;
        this.lastname = data.lastname;
        this.birthday = data.birthday;
        this.email = data.email;
      }
    }
  }
  