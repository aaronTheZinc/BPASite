import React, {Component} from 'react'
import firebase from '../firebase/index'
import { InputForm , Alert, ContactInfo, LocationForm} from "./form";
import Swal from 'sweetalert2'
class form extends Component {

    constructor() {
    super()
        this.state = {
      
             firstName : '',
             lastName: '',
             membersNames:[],
             year: false,
             chapterName: '',
             raw:'',
             name:'',
             form: {
                 formState:1,
                 bttnIsVisible: false
             }
            

        
          
         
        }

        this.onClick = this.onClick.bind(this)
        this.onChange = this.onChange.bind(this)
        this.setYear = this.setYear.bind(this)
        this.appendArr = this.appendArr.bind(this)
        this.formGoBack = this.formGoBack.bind(this)
        
    }

    componentDidMount(){

    }

    setYear = (e) => {
        console.log(e)
            this.setState({
                year: e.value
          })
    }

    appendArr = (e) => {
        const data = e.target.value
    
        const parsed = data.replace(/,/g, ' | ' )

        if(data === '') {
            this.setState({
                membersNames: [],
                name: 'empty'
            })
        }

        this.setState({
            membersNames: data.split(','),
            name: parsed,
            raw: data
        })
    }

    formGoBack =(e) => {
        e.preventDefault()
        this.setState({
            form:{
                formState:1,
                bttnIsVisible: false
            }
        }) 
    }


    onClick = (e) => {
        e.preventDefault()
    const data = this.state
    console.log(data)
        if(firebase.checkFields(data)) {
           
           this.setState({
               form:{
                   formState:2,
                   bttnIsVisible: true
               }
           }) 
        // firebase.signUp(data);
        }
        
         console.log('clicked')
    }

    onChange =(e)=> {
        this.setState({
      
                [e.target.name] : e.target.value
      
        })
        console.log(e.target.name)
    }

    render() {
        const {name, form:{bttnIsVisible, formState}} = this.state

        
        return (
            <form>
                {
                    (formState === 1 ) ?
                    <div>
                        <InputForm data={this.state} onChange={this.onChange}/>
                    <div style={{  marginTop: '60px'}}>
                    
                    {/* tfc means team field count */}

                    <ContactInfo data={this.state} onChange={this.onChange}
                    year={this.setYear}
                    setNames={this.appendArr}
                    name={name}
                    />
                    </div>
                </div>
           
                 : <LocationForm/>


                }

                <div>
                 <button type='submit' class='submitBtn'style={{marginTop:'100px'}}  onClick={(formState ===1)? this.onClick: this.formGoBack} > {(formState ===1)? 'Next' : 'Back'} </button>
                 <br></br>
                 {
                     (bttnIsVisible === true)?
                 <button type='submit' class='submitBtn'style={{marginTop:'20px', width:'200px', borderColor:'black',backgroundColor:'white', color:'black', borderWidth:'3px'}}  onClick={this.onClick} > Complete </button>
                 : <> </>
                    }
                 </div>
                 </form>
           
        )
    }
}
export default form