export class RegisterData {

    private username: string;
    private password: string;
    private email: string;

    constructor(username: string, password:string, email:string){
        this.email = email;
        this.username= username;
        this.password = password;
    }

    getUsername(){
        return this.username;
    }

    getPassword(){
        return this.password;
    }

    getEmail(){
        return this.email;
    }

}