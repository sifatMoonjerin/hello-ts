(()=>{
    function add(a: number, b: number): number{
        return a + b
    }

    function printResult(n: number): void{
        console.log(n)
    }
    printResult(add(3,2))

    let combine: (a: number, b: number) => number;
    combine = add;
    console.log(combine(8, 8))
})()