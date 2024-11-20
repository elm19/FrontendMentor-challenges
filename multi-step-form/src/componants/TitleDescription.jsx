function TitleDescription({stepContent}) {
    return (
        <div>
            <h1>{stepContent.title}</h1>
            <p>{stepContent.desc}</p>
        </div>
    );
}

export default TitleDescription;