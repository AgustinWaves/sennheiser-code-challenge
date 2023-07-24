import React from 'react'

const URLForm: React.FC = () => {
  return (
    <div role='container' className='container'>
        <h1 className='title'>URL SHORTENER</h1>
        <form className='form-container'>
            <input className='url-input' type="text"  placeholder='https://example.com' />
            <button className='button' type='submit'>CREATE SHORT URL</button>
        </form>
    </div>
  )
}

export default URLForm