export interface Frase
{
    id:number,
    language_code: string,
    content: string,
    url: string,
    originator:{
        id: number,
        bame:string,
        url: string
    }
    tags:[]
}