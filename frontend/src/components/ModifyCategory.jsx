import {useState} from 'react';

export default function ModifyCategory(){

    const [category, setCategory] = useState('');

    return (

        <>

        <div className="form_page">
            <h2 className="head_line">
                Modify Categories
                </h2>
            <form  className="form_ondc">
                <input type="text" className="text_input" value={category} placeholder="Enter the required category"/>

              <button className="accept_submit">
                <span> Create Category</span>
              </button>

              <button className="reject_submit">
                <span> Remove Category </span>
              </button>
            </form>
        </div>
        </>
    )
} 