import React from 'react'

export const Head = ({ title }) => {
    React.useEffect(() => {
        document.title = title;
    }, [title])


    return (
        <>
        </>
    )
}
