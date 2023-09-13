import React from 'react'

const PostModal = ({item, closeModal}) => {
  return (
    <>
       <div className="modal" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Details</h5>
            <button type="button" className="close" onClick={closeModal}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>
              <strong>ID:</strong> {item.id}
            </p>
            <p>
              <strong>Title:</strong> {item.title || item.name}
            </p>
            <p>
              <strong>Body:</strong> {item.body || item.email || item.completed || item.username}
            </p>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default PostModal