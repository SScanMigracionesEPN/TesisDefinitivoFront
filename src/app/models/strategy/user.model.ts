export interface User{
    id?: string;
    name: string;
  }

  export interface UserResponseModel {
    allUsers: User[];
  }
  
  export interface UserOneResponseModel {
    findByName: User;
  }
  