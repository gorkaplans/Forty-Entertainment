
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
    const [poster, setPoster] = useState('')
    const [sinopsi, setSinopsi] = useState('')
    const [video, setVideo] = useState('')
    const [credits, setCredits] = useState('')
    const [date, setDate] = useState('')
    const [palms, setPalms] = useState([])

    const formatCredits = marked(credits)
    const formatDate = marked(date)


    async function getSingleProject(idProject) {
        const entry = await client.getEntry(idProject)
        setTitle(entry.fields.title)
        setDescription(entry.fields.descriptionProject)
        setImage(entry.fields.image.fields.file.url)
        setPoster(entry.fields.poster.fields.file.url)
        setSinopsi(entry.fields.sinopsi)
        setVideo(entry.fields.trailerlink)
        setCredits(entry.fields.productionCredits)
        setDate(entry.fields.preDate)
        setPalms(entry.fields.palms)
    }


    useEffect(() => {
        getSingleProject(id)
    }, []);



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
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat'
                    }}>
                </div>
            </div>

            <div className="sinopsi-detail-container">
                <div className="poster-container-2">
                    <img src={poster}></img>

                </div>
                <div className="sinopsi-project-container">
                <section className="date" dangerouslySetInnerHTML={{ __html: formatDate }} />  
                    {sinopsi}
                </div>
            </div>
            {
                video && video.length ?
                    <div className="description-detail-container regular2">
                        <iframe
                            frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen
                            src={`https://player.vimeo.com/video/${video}`}>
                        </iframe>
                    </div>
                    : <span></span>
            }
            <div className="credits-container">
                <section className="grid-container" dangerouslySetInnerHTML={{ __html: formatCredits }} />
            </div>

            {palms && palms.length ? <div className="palms-wraper">
                {palms.map((value, index) => {
                    return <div
                        className="palm-container"
                        style={{
                            backgroundImage: `url(${value.fields.file.url})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionY: 'center',
                        }}> </div>
                })}
            </div>
                : <span></span>}





        </MainLayout>

    )
}

export default ProjectDetail;


