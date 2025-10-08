export interface Osoba {

id:number
imie:string
nazwisko:string
dataUr:string
zdjecie:string
plec:Plec
waga:number
wzrost:number
}
export enum Plec{
    K="K",
    M="M"
}
