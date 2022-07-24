const Project = ({ url, title, description }) => {
    return (
        <div className="project-item">
            <a href={url}>
                <div className="project-desc">
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </a>
        </div>
    );
}

export default Project;