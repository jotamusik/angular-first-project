
export class User {
  name: string;
  email: string;
  address: string;
  gender: string;
  password: string;

  equals(user: User) {
    return ( this.email === user.email );
  }

}
