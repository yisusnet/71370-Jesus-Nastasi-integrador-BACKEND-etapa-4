
const handleObjMongoToObjJs = (elemento) => {
    const objJS = JSON.parse(JSON.stringify(elemento)) 
    return objJS
}

export default handleObjMongoToObjJs
