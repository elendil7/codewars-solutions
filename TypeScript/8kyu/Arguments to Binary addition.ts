export function arr2bin(arr: any[]): string {
    return arr.filter(v=>typeof v === "number").reduce((a,b)=>+a + +b, 0).toString(2)
}
