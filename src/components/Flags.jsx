export default function Flag({ language }) {

    let flagSrc = "/flags/none.png"

    if (language === "it") {
        flagSrc = "/flags/it.png"
    }
    else if (language === "en") {
        flagSrc = "/flags/us.png"
    }
    else if (language === "ja") {
        flagSrc = "/flags/jp.png"
    }
    return (
        <img src={flagSrc}
            alt={language}
            width="30" />
    )

}