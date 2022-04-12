class Employee{

    // id: number;
    // name: string;
    // salary: number;

    private _location: string;

    constructor(public id?: number, public name?: string, public salary?: number){

    }

    //Property
    get location(){
        return this._location;
    }
    set location(value: string){
        this._location = value;
    }
}

export default Employee;
