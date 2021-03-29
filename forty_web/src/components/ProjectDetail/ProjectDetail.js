
import React from 'react';
import './ProjectDetail.scss'
import { client } from '../../client';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../MainLayout'
import Menu from '../Menu'
import marked from 'marked'





const ProjectDetail = () => {
    const menu = ['MANIFEST', 'PROJECTS', 'CONTACT']
    let { id } = useParams()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        client.getEntry({
            content_type: "productions",
            entry_id:id 
            })
            .then((entry) => {
                console.log(entry)
                setTitle(entry.fields.title)
                setDescription(entry.fields.descriptionProject)
                setImage(entry.fields.image.fields.file.url)
            })
            .catch(console.error)
    }, []);

    console.log(title)


    return (

        <MainLayout>
            <Menu titles={menu}></Menu>
            <div className="title-detail-container">
                <div className="title-project-container bold">
                   {title} 
                </div>
                <div className="photo-project-container bold"
                   style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                 }}>
                </div>
            </div>
            <div className="description-detail-container regular2">
                <span className="video-item bold">
                 VIDEO
                </span> 
            </div>
        </MainLayout>

    )
}

export default ProjectDetail;



