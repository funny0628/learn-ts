class DataHelper{
    dataKey:string;
    primarKey:string;
    constructor( dataKey:string,primarKey:string){
        this.dataKey = dataKey;
        this.primarKey = primarKey;
    }
    readData():any{}
    saveData():number{
        return -1
    }
    addData(conStr:string):number{
        return -1
    }
    removeDataById(id:string|number):boolean{
        return false;
    }


}
export default DataHelper;