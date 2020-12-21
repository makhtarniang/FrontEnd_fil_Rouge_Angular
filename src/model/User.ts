export class User{
    id:number;
    nom:string;
    prenom:string;
    email:string;
    type:string;


constructor(nom:string,id:number,prenom:string,email:string,type:string)
{
    this.id=id;
    this.nom=nom;
    this.prenom=prenom;
    this.email=email;
    this.type=type;

}
}
