function process(x: number, y: number): number| null{

    if(x === 0){
        return null;
    }

    return x + y;
}


describe("Demo Test Suite", () => {

    test("process", () => {
        const result = process(5, 7);
        expect(result).toBe(12);
    })

    test("process -ve", () => {

        const result = process(0, 7);
        expect(result).toBeNull();
    })

})


export {};