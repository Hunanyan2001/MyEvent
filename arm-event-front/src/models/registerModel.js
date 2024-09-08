export class registerModel {
  constructor(
    username = "",
    email = "",
    phone = "",
    password = "",
    confirmPassword = ""
  ) {
    this.username = username;
    this.email = email;
    this.phone = phone;
    this.password = password;
    this.confirmPassword = confirmPassword;
  }
}
