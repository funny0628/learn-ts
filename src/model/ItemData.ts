import Categry from './CategoryEnum' //使用.ts文件是可以不写后缀名

class ItemData{
    id!:number;
    categoryId!:Categry;
    title!:string;
    content!:string;
    createTime!:string;
    constructor(id:number = -1,categoryId:Categry = -1,title:string = "",content:string = "",createTime:string = ""){
        this.id = id;
        //使用枚举类型表示笔记分类
        this.categoryId = categoryId;
        this.title = title;
        this.content = content;
        this.createTime = this.Time(Date.now());
    }
    //将时间戳转换成日期时间字符串
    Time(time:number):string{
        let date = new Date(time);
        let str = date.getFullYear() +  "-" + (date.getMonth()+1) + "-" + date.getDay() + " " + date.getHours() + ":" + date.getMinutes()
        return str
    }

}
export default ItemData;