import React, { useEffect } from 'react'
import useStarage from '../Hooks/useStorage'
const Progress = ({ file, setFile }) => {
    const { url, progress } = useStarage(file)
    useEffect(() => {
        if (url) {
            setFile(null);
        }}, [url, setFile])
    
    return (
        <div className="progress_bar" style={{width : progress + '%'}}></div>
    )
}

export default Progress
