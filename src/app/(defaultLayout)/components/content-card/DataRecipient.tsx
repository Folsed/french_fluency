// 'use client'

import { CourseDocument } from '@/models/Course'
import React from 'react'
import SingleCard from './SingleCard'

interface IData {
    courses: CourseDocument[]
}

const DataRecipient: React.FC<IData> = ({ courses }) => {
    return (
        <>
            {courses.map((item, key) => (
                <SingleCard data={item} key={key} />
            ))}
        </>
    )
}
export default DataRecipient
