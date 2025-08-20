//! 4.write a function which will tell what kind of triangle is it 
    //? all three sided equal : Equilateral Triangle
    //? two sides are equal : isosceles triangle
    //? If no sides are equal : scalene

//todo : using my way 
function typeOfTriangle(n1,n2,n3){
    if(n1==n2 && n2==n3) return "Equilateral"
    if(n1==n2 || n2==n3 || n1==n3) return "isosceles"
    return "scalene"
}
console.log(typeOfTriangle(10,10,10));
console.log(typeOfTriangle(10,10,20));
console.log(typeOfTriangle(10,30,20));