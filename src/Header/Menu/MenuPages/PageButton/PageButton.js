import React from 'react'
export function PageButton(props) {
    return (
        <p className="singlePage"
            onClick={() => props.selectPages(props.text)}>
            {props.text} </p>
    )
}

export default PageButton;