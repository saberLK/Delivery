
import { Web } from "./model.web";
import { Base } from "./model.base";
import { AppConsole } from "./model.appcs";
import { AppUnix } from "./model.appux";
import { Unix } from "./model.unix";

export class Environement{
    id_environement : Number;
    nomEnv : string;
    type_environement:string;
    web:Web;
    base:Base;
    appcs:AppConsole;
    appux:AppUnix
    unix:Unix;
}