const BtnComponent = ({ text, download, resumeHref }) => {
    return (
        <a href={resumeHref} download={download} className="px-5 py-3 font-medium border border-btnBorder bg-btn bg-btnBackground rounded-lg hover:bg-btnHover">{text}</a>
    )
}

export default BtnComponent