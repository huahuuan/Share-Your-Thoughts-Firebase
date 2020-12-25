firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
       console.log(user)
       document.getElementById('userDetails').innerHTML = `
        <p style="padding:3%;border:1px solid #e0e0e0">User Logged In with <img src="${user.photoURL}" style="width:25px;"> ${user.displayName} (${user.email})</p>

        <button onClick="logout()" class="btn btn-primary">Logout as a ${user.displayName}</button>
        <br><br>
       `
    } else {
        window.location = "login.html"
    }
});

function showData(){
    document.getElementById('res').innerHTML = ""
    firebase.firestore().collection('data').get().then(docs=>{
        docs.forEach(doc=>{
            // console.log(doc.id)
            // console.log(doc.data())

            document.getElementById('res').innerHTML += `
                <tr>
                    <td>${doc.data().msg}</td>
                    <td>${doc.data().timestamp.toDate().toLocaleString()}</td>
                    <td>
                        <button onClick="deleteData('${doc.id}')" class="btn btn-danger">Delete</button>
                    </td>
                </tr>
            `
        })
    })
}

function deleteData(id){
    if(confirm('Are you Sure?')){
        console.log(id)
        firebase.firestore().collection('data').doc(id).delete().then(()=>{
            alert('Data Removed Success')
            showData()
        }).catch(e=>{
            console.log(e)
        })
    }
}

function logout(){
    firebase.auth().signOut().then(function() {
        window.location = "login.html"
      }).catch(function(error) {
        
        console.log(error);
      });
}

showData()