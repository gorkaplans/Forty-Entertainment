
import React from 'react';
import './ProjectDetail.scss'
import { client } from '../../client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../MainLayout'
import Menu from '../Menu'





const ProjectDetail = () => {
    const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']
    let { id } = useParams()
    const [title, setTitle] = useState('')

    useEffect(() => {
        client.getEntry(id)
            .then((entry) => {
                console.log(entry)
                setTitle(entry.fields.name)
            })
            .catch(console.error)
    }, []);

    console.log(title)


    return (

        <MainLayout>
            <Menu titles={menu}></Menu>
            <div className="detail-container">
                <div className="title-project-container bold2">
                   {title} 
                </div>
            </div>
        </MainLayout>

    )
}

export default ProjectDetail;



