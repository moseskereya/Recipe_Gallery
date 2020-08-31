import React from 'react'
import useFirestore from '../Hooks/useFirestore'

const Images = () => {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div className="images">
            {docs && docs.map(doc =>
                <div className="img-wrap" key={doc.id}>
                    <img src={doc.url} alt="recipe_image" />
             </div>
            )}
        </div>
    )
}

export default Images
