import React from 'react';

export default function ImgData(props) 
{
  const tags = props.i.tags.split(',');
  return (
    <>
      <div className=" max-w-sm mx-auto my-3 rounded overflow-hidden shadow-lg bg-slate-100 ">
        <img src={props.i.webformatURL} alt="" className='w-full' />

        <div className="px-6 py-4">
          <div className="font-bold text-teal-500 text-xl">{props.i.user}</div>
          <ul>
            <li>
              <b>Views: </b>
              {props.i.views}
            </li>
            <li>
              <b>Dowaloads: </b>
              {props.i.downloads}
            </li>
            <li>
              <b>Likes: </b>
              {props.i.likes}
            </li>
          </ul>
        </div>
        <div className='mx-6 mb-3'>
           {tags.map((tag,j) => (
          <span key={j} className=' inline-block bg-gray-300 rounded-full text-sm px-2 mx-1 font-mono'>{tag}</span>
          ))}
          
        </div>
      </div>
     </> 
     );
}