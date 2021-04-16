//1.

// let s=String(prompt("Nhap vao chuoi bat ky!"));
// console.log(s);
// let a=[];
// for(let i=0;i<s.length;i++)
// {
//     a.push(s[i]);
// }
// let b=[];
// for(let j=a.length-1;j>=0;j--)
// {
//     b.push(a[j]);
// }
// console.log("Chuoi dao nguoc la: ");
// console.log(b.join(''));


//2.

// let s=String(prompt("Nhap chuoi nao!"));
// console.log(s);
// let a=[];
// a.push(s[0].toUpperCase());
// for(let i=1;i<s.length;i++)
// {
//     if(s[i]==" ")
//     {
//         a.push(s[i]);
//         a.push(s[i+1].toUpperCase());
//     }
//     else{
//         a.push(s[i]);
//     }
    
// }
// console.log("Chuoi viet hoa!");
// console.log(a.join(''));




//3.

// let s=String(prompt("Nhap vao chuoi di!"));
// let a=[];
// for(let i=0;i<s.length;i++)
// {
//     a.push(s[i]);
// }
// console.log(a);
// let b=[];
// b.push(a[0]);
// for(let i=1;i<s.length;i++)
// {
    
//     if(b.indexOf(a[i])==-1)
//     {
//         b.push(a[i]);
//     }
// }
// console.log(b);



//4.

// let nv=[{ten:"nguyen",tuoi:3,chucVu:"kt",luong:45},
// {ten:"cong",tuoi:1,chucVu:"hc",luong:35},
// {ten:"phuong",tuoi:4,chucVu:"kt",luong:40}]

// let lap=true;
// while(lap)
// {
//     let s=String(prompt("Nhap C-R-U-D!"));
//     if(s=="C"){
//         let themNV={};
//         let a=String(prompt("Nhap ten!"));
//         themNV.ten=a;
//         let b=String(prompt("Nhap tuoi!"));
//         themNV.tuoi=b;
//         let c=String(prompt("Nhap chuc vu!"));
//         themNV.chucVu=c;
//         let d=String(prompt("Nhap luong!"));
//         themNV.luong=d;
//         nv.push(themNV);
//     }
//     if(s=="R")
//     {
//         console.table(nv);
//     }
//     if(s=="U")
//     {
//         let u=String(prompt("Nhap index!"));
//         let a=String(prompt("Nhap ten!"));
//         nv[u].ten=a;
//         let b=String(prompt("Nhap tuoi!"));
//         nv[u].tuoi=b;
//         let c=String(prompt("Nhap chuc vu!"));
//         nv[u].chucVu=c;
//         let d=String(prompt("Nhap luong!"));
//         nv[u].luong=d;
//     }
//     if(s=="D"){
//         let d=String(prompt("Nhap index!"))
//         nv.splice(d,1);
//     }
//     if(s=="0")
//     {
//         lap=false;
//     }
// }



//5.



    // let d=Number(prompt("Nhap ngay!"));
    // let m=Number(prompt("Nhap thang!"));
    // let y=Number(prompt("Nhap nam!"));
    // if(m<1 || m>12)
    // {
    //     alert("Ngay "+d+" / "+m+" / "+y+" ko hop le!");}

    // if(m==1||m==3||m==5||m==7||m==8||m==10||m==12){
    //     if(1<=d&&d<=31)
    //     {
    //         alert("Ngay "+d+" / "+m+" / "+y+" hop le!");
    //         if(m==12)
    //         {
    //             if(1<=d&&d<=30)
    //             {
    //                 alert("Ngay mai la ngay "+(d+1)+" / "+m+" / "+y+" !");
    //             }
    //             if(d==31)
    //             {
    //                 alert("Ngay mai la ngay 1 / 1 / "+(y+1)+" !");
    //             }
    //         }
    //         else{
    //             if(1<=d&&d<=30)
    //             {
    //                 alert("Ngay mai la ngay "+(d+1)+" / "+m+" / "+y+" !");
    //             }
    //             if(d==31)
    //             {
    //                 alert("Ngay mai la ngay 1 / "+(m+1)+" / "+y+" !");
    //             }
    //         }
            
    //     }
    //     else{
    //         alert("Ngay "+d+" / "+m+" / "+y+" ko hop le!");
    //     }
    // }
    // if(m==4||m==6||m==9||m==11){
    //     if(1<=d&&d<=30)
    //     {
    //         alert("Ngay "+d+" / "+m+" / "+y+" hop le!");
    //         if(1<=d&&d<=29)
    //             {
    //                 alert("Ngay mai la ngay "+(d+1)+" / "+m+" / "+y+" !");
    //             }
    //             if(d==30)
    //             {
    //                 alert("Ngay mai la ngay 1 / "+(m+1)+" / "+y+" !");
    //             }
    //     }
    //     else{
    //         alert("Ngay "+d+" / "+m+" / "+y+" ko hop le!");
    //     }
    // }
    // if(m==2)
    // {
    //     if(y%4==0){
    //         if(1<=d&&d<=29)
    //         {
    //             alert("Ngay "+d+" / "+m+" / "+y+" hop le!");
    //             if(1<=d&&d<=28)
    //             {
    //                 alert("Ngay mai la ngay "+(d+1)+" / "+m+" / "+y+" !");
    //             }
    //             if(d==29)
    //             {
    //                 alert("Ngay mai la ngay 1 / "+(m+1)+" / "+y+" !");
    //             }
    //         }
    //         else{
    //             alert("Ngay "+d+" / "+m+" / "+y+" ko hop le!");
    //         }
    //     }
    //     else{
    //         if(1<=d&&d<=28)
    //         {
    //             alert("Ngay "+d+" / "+m+" / "+y+" hop le!");
    //             if(1<=d&&d<=27)
    //             {
    //                 alert("Ngay mai la ngay "+(d+1)+" / "+m+" / "+y+" !");
    //             }
    //             if(d==28)
    //             {
    //                 alert("Ngay mai la ngay 1 / "+(m+1)+" / "+y+" !");
    //             }
    //         }
    //         else{
    //             alert("Ngay "+d+" / "+m+" / "+y+" ko hop le!");
    //         }
    //     }   
    // }
    // function sum(a,b){
    //     if(typeof(a)=='number' && typeof(b)=='number')
    //     {
    //         return a+b;
    //     }
    //     else{
    //         return false;
    //     }
    // }
  let a=Number(prompt("nhap a = "));
    console.log(typeof(a));




