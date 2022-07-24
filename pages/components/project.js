const Project = ({ url, title, description }) => {
    return (
        <div>
            <div className="project-item">
                <a href={url}>
                    <div className="project-desc">
                        <h4>{title}</h4>
                        <p>{description}</p>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Project;