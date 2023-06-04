import React from "react";

const PostsTable = ( props ) => {
    const { items,onDelete } = props;
   return (
    <table className="table">
    <thead>
    <tr>
        <th scope="col">Nr</th>
        <th scope="col">Text </th>
        <th scope="col">Image</th>
        <th scope="col"></th>
        
    </tr>
    </thead>
    <tbody>
    {items.map((item, key) =>
        (
            <tr key={key}>
                <td>{item.title}</td>
                <td>{item.text}</td>
                <td><img style={{width: '50px', height: '50px'}} src={item.image} alt={key}/></td>
                <td>
                           <button onClick={() => onDelete(item)} className="btn btn-danger">Delete
                           </button>
                       </td>

                                   </tr>
))}
</tbody>
</table>

       
   )
};
export default PostsTable;