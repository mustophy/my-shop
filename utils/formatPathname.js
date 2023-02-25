import { capitalize } from "./capitalize"

export const formatPathname = (pathname) => {
    const paths = pathname.split("/")
    let formattedPath = ''
    let mainPath = ''
    paths.forEach((path, index) => {
        if(index + 1 !== paths.length && index > 0 && paths.length > 1) formattedPath += capitalize(path) + " / "
        else if(index + 1 !== paths.length && index <= 1) formattedPath += capitalize(path)
        else mainPath = capitalize(path)
    })
    return {formattedPath, mainPath}
}   
