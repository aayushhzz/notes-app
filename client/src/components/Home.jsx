import React from 'react'
import Notes from './Notes'
const Home = () => {
  return (
    <div className='container my-5'>
      <h2>Add a new Note</h2>
      <form>
        <div className="mb-3 my-4">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 my-4">
          <label htmlFor="desc" className="form-label">Description</label>
          <input type="text" className="form-control" id="desc"/>
        </div>
        <button type="submit" className="btn btn-primary my-2">Submit</button>
      </form>
      <h2>Your Notes</h2>
      <Notes/>
    </div>
  )
}


export default Home