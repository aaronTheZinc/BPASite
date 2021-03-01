
import firebase from './firebase'
import swal from 'sweetalert2'
import cogoToast from "cogo-toast";
const db = firebase.firestore()


const sendErr = (mes) => {
    cogoToast.error(mes)
}
 class FireEvent {
     constructor() {
     }
     signUp = async(data) => {

      const result_id = await db.collection('BPAMEMBERS').add(data).then(
            (result) => {

                const doc = result.id;
                    console.log(doc)
                
                    return doc
            }
        
        ).catch((e) =>{
            console.log(e)
        })
        return result_id
     }

     checkFields = (data) => {
         const list = data.membersNames
         for(let i=0; i<list.length; i++) {
            if(list[i] ==='') {
                delete list[i]
            }
         }
        if(data.year && data.firstName !== '' && data.lastName !== '' && data.chapterName !== '' && list.length !==0) {
            
         return true
        }
        else {
            sendErr('Please fill out all fields.')
            return false
        }

           

     }
   
        
     
 }


 export default new FireEvent()
