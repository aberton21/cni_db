import React, { useState } from 'react'
import { Input } from 'antd';

// import { PromiseProvider } from 'mongoose';

import { PromiseProvider } from 'mongoose';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)
    }

    return ( 
        <div>
            <Search 
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Search By Typing..."
            />
        </div>
    )
}

export default SearchFeature