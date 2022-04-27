import React, { ChangeEvent, Component, useEffect, useState } from 'react';
import { Customer } from '../model/Customer';


interface EditCustomerProps{
    customer: Customer,
    onCancel? : (message: string) => void,
    onSave? : (updatedItem: Customer) => void
}



const EditCustomer = React.forwardRef((props: EditCustomerProps, ref) => {

    const [currentCustomer, setCurrentCustomer] = useState<Customer | null>(null)

   useEffect(() => {

        if(props.customer){
            setCurrentCustomer(props.customer);
        }

   }, [props.customer])
   

    const save = () => {

        if(props.onSave && currentCustomer !== null){

            props.onSave(currentCustomer);
        }
    }
    const cancel = () => {

        if(props.onCancel){
            props.onCancel("The operation was cancelled");
        }
    }

    

    

    

        return(
            <div>
                <h4>Edit Customer : ID {currentCustomer?.id}</h4>

                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" value={currentCustomer?.name} 
                            onChange={(e) => setCurrentCustomer({...currentCustomer, name: e.target.value})}/>
                </div>

                <div>
                    <label htmlFor="location">Location</label>
                    <input id="location" type="text" value={currentCustomer?.location} 
                                                    onChange={(e) => setCurrentCustomer({...currentCustomer, location: e.target.value})}/>
                </div>

             

                <div>
                    <button onClick={save}>Save</button>&nbsp;
                    <button onClick={cancel}>Cancel</button>
                </div>
            </div>
        )
    

    
});

export default EditCustomer;