export class Control {
  constructor(
    public icon: string,
    public displayName: string,
    public controlType: string,
    public name: string, 
    public tooltip: string, 
    public type: string,
    public placeholder: string,
    public isRequired: boolean,
    public maxlength: number,
    public options: any) {}
}