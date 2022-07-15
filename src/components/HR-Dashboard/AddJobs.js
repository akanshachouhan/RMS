import React from 'react'
import AvailableJobs from '../common-component/AvailableJobs'
import SearchAppBar from './JobAddBtn'

const AddJobs = () => {
    return (
        <div>
            <SearchAppBar/>
            <AvailableJobs/>
        </div>
    )
}

export default AddJobs
