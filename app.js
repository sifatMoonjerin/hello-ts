(function () {
    function add(a, b) {
        return a + b;
    }
    function printResult(n) {
        console.log(n);
    }
    printResult(add(3, 2));
    var combine;
    combine = add;
    console.log(combine(8, 8));
})();
