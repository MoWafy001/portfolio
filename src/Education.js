import { Transition, easings } from "react-spring";

import Win from "./Win";

export default function Education({ show, handelClose, buttons: { handelNext, handelBack } }) {

    const height = window.innerHeight * 0.9;
    const width = height * 1.5;

    const x = window.innerWidth / 2 - width / 2
    const y = window.innerHeight / 2 - height / 2

    const projects = [
        { tag: 'DataCamp', title: 'Professional Data Scientist Certificate', img: 'https://github.com/AhPro7/my-certifications/blob/main/1.Data%20Scientist%20Professional.png?raw=true', link: 'https://www.datacamp.com/certificate/DS0014801924371', },
        { tag: 'Machine , DeepLearning - IBM ', title: 'IBM Machine Learning', img: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~63SZZBMZ4T4D/CERTIFICATE_LANDING_PAGE~63SZZBMZ4T4D.jpeg", link: 'https://www.coursera.org/account/accomplishments/professional-cert/63SZZBMZ4T4D', },
        { tag: 'Udacity', title: 'Advanced Data Analysis', img: 'https://s3-us-west-2.amazonaws.com/udacity-printer/production/certificates/f8383d74-a7b1-4733-9dea-fcfb80225ffa.svg', link: 'https://graduation.udacity.com/confirm/FFGDWSHT', },
        { tag: 'Machinfy', title: 'Machine learning intership', img: 'https://github.com/AhPro7/my-certifications/blob/main/intership_machinefy.jpg?raw=true', link: '', },
        { tag: 'DataCamp', title: 'Data Scientist with Python Track', img: 'https://ahpro7.github.io/Ahmed_Haytham/res/Certificates/data_sc.png', link: 'https://www.datacamp.com/certificate/DS0014801924371', },
        { tag: 'DataCamp', title: 'Machine Learning Scientist with Python Track', img: 'https://ahpro7.github.io/Ahmed_Haytham/res/Certificates/data_ml.png', link: 'https://www.datacamp.com/certificate/DS0014801924371', },
        { tag: 'DataCamp', title: 'Tableau Fundamentals Track', img: 'https://ahpro7.github.io/Ahmed_Haytham/res/Certificates/data_sc.png', link: 'https://www.datacamp.com/statement-of-accomplishment/track/5cabdd17ac9041f475a1c99e4a06f2229498f02e', },
        { tag: 'DataCamp', title: 'Data Analyst with SQL Server', img: 'https://ahpro7.github.io/Ahmed_Haytham/res/Certificates/data_an_s.png', link: 'https://www.datacamp.com/statement-of-accomplishment/track/e5c0eeee55e64a5f1ef5d6688eab5e089d50f942', },
    ]

    return (
        <Transition
            items={show}
            from={{ opacity: 0, top: y * 4, height: height / 4 }}
            enter={{ opacity: 1, top: y, height }}
            leave={{ opacity: 0, top: y * 4, height: height / 4 }}
            config={{
                duration: 1000,
                easing: easings.easeOutBack,
            }}>

            {(props, s) => (
                s && <Win body_style={{ fontSize: '1em', display: 'flex', justifyContent: 'flex-start', padding: '1rem', flexDirection: 'column', gap: '1em' }} handelClose={handelClose} animation_styles={props} title="Education" x={x} y={y} width={width} height={height} resizeable>

                    <p style={{
                        border: '2px solid #222',
                        padding: '0.5em 2em',
                        boxShadow: '0.5em 0.5em #000',
                        marginRight: '0.5em'
                    }}>Certs</p>

                    <div className="certs">
                        {projects.map(p => (
                            <a href={p.link} target="_blank" rel="noreferrer" className="cell">
                                {p.img ?
                                    <div style={{display:'flex', flexDirection:'column', height:'100%'}}>
                                        <img src={p.img} alt="img" />
                                        <span className='t'>{p.title}</span>
                                        <span className="tag">{p.tag}</span>
                                    </div>
                                    :
                                    <div className="cover">
                                        <span className='t'>{p.title}</span>
                                        <span className="tag">{p.tag}</span>
                                    </div>
                                }
                            </a>
                        ))}
                    </div>


                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '1em'
                    }}>
                        <button onClick={handelBack} className="page-button">Back (Projects)</button>
                        <button onClick={handelNext} className="page-button">Navigate</button>
                    </div>
                </Win>
            )}
        </Transition>
    )
}
