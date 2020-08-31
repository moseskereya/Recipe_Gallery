import React, {useState } from 'react'
import Progress from './Progress';

function File() {
    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)
    const types = ['image/png', 'image/jpeg'];
    const onChangeHandler = (e) => {
        let selected = e.target.files[0]
        if (selected && types.includes(selected.type)) {
            setFile(selected)
            setError('')
        } else {
            setFile(null);
            setError('please select an image file (png or jpg')
        }
    }
    
    return (
        <form>
       <label>
        <input type="file" onChange={onChangeHandler} />
        <span>+</span>
      </label>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {file && <div className="file">{file.name}</div>}
                {file && <Progress file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default File

