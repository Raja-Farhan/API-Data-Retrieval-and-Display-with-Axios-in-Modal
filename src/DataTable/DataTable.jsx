import React from 'react'
import './DataTable.css'

const DataTable = ({data, displayDetails}) => {
  return (
    <>
        <table className='table table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>User ID</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item)=>(
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title || item.name}</td>
                        <td><button onClick={() => displayDetails(item)}>Details</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
  )
}

export default DataTable