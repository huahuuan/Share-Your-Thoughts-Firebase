function addData(){
    let msg = document.getElementById('msg').value 

    if(!msg){
        alert('Kindly input valid Text')
    }else{
        console.log(msg)
        firebase.firestore().collection('data').add({
            msg: msg,
            timestamp: new Date()
        }).then(doc=>{
            console.log('Doc id '+ doc.id)
            alert('Data Added')
            document.getElementById('msg').value = ''
        }).catch(e=>{
            console.log(e)
        })
    }
}