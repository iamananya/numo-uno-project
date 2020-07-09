import React, { useEffect } from 'react'

export default function GoogleOAuth() {

    useEffect(() => {
        const params = new URLSearchParams(window.location.search)
        const code = params.get('code')
        const state = params.get('state')
    })
    return(
        <div>
            <h1>Loading</h1>
        </div>
    )
}