//구구단
for (var i = 2; i < 10; i++) {
    for (var j = 1; j < 10; j++) {
      document.write(`${i} X ${j} = ${i*j} <br>`);
    }
  }


  let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i*j}`);
    j++;
  }
  i++;
  j = 1;
}
// j=10인 상태라 두번째 while문을 실행할수없어서 초기화가 필요합니다!