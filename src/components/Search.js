import React, { useState } from 'react';

function Search(props) {
    const [txt, setTxt] = useState('');

    const submit= (e)=>{
        e.preventDefault();
        props.srch(txt);
    }

    return (
        <div className='w-full flex'>
            <form className='mx-auto' onSubmit={submit}>
                <input className='px-1 rounded' type="text" onChange={e => setTxt(e.target.value)} />
                <button className='ml-2 px-2 rounded-md font-semibold bg-gradient-to-br from-lime-400 to-white' type="submit" >SEARCH</button>
            </form>
        </div>
    )
}

export default Search;