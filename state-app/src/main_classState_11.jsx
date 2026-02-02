import { createRoot } from 'react-dom/client'
import React from 'react'

class Customer extends React.Component {
    //nested state
    state = {
        customer: {
            id: 1,
            name: 'Subramanian',
            contact: {
                address: {
                    city: 'Chennai'
                },
                communcation: {
                    mobileNo: '9000000'
                }
            }
        }

    }
    onUpdate = () => {
        this.setState((prevState) => {
            return {
                ...prevState, // level -0 
                customer: {
                    ...prevState.customer, //level -1 copy all outer customer properties
                    contact: {
                        ...prevState.customer.contact, // level 2 copy: copy all contact details,
                        communcation: {
                            ...prevState.customer.communcation,
                            mobileNo: '9003706367'
                        }
                    }
                }
            }
        })
    }
    render() {
        return <div>
            <h1>Customer info</h1>
            <h2>Name : {this.state.customer.name}</h2>
            <h2>Phone : {this.state.customer.contact.communcation.mobileNo}</h2>
            <button onClick={this.onUpdate}>Update Mobile No</button>
        </div>
    }


}


function App() {
    return <>
        <Customer />
    </>
}
createRoot(document.getElementById('root')).render(<App />)
