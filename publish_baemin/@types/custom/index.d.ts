declare module "*.svg"{
    const value: any;
    export = value;
};
declare module "*.png";
declare module "*.jpg"{
    const value: any;
    export = value;
};


declare module 'publish' {
    type CardData = {
        id: number;
        image: string;
        title: string;
        area: string;
        isCamp?: boolean;
    }
}