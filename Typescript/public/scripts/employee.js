class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    //Property
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
export default Employee;
