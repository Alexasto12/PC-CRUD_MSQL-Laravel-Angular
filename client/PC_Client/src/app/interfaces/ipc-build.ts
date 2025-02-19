export interface IpcBuild {
    [key: string]: any;
    id: string  ;
    name: string;
    components: JSON;
    price: number | undefined;
    image: string | null;
}
