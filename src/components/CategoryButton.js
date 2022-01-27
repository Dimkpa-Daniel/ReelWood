import React from 'react'

function CategoryButton({category}) {
    return (
        <>
            <button style={{padding:"50px 0"}} className="category-button">{category}</button>
        </>
    )
}

export default CategoryButton
