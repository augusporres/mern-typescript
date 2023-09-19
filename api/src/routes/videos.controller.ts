import { RequestHandler } from 'express'


export const createVideo: RequestHandler = (req, res) => {
    res.json('creating videos')
}

export const updateVideo: RequestHandler = (req, res) => {
    res.json(`updating video with id ${req.params.id}`)
}

export const deleteVideo: RequestHandler = (req, res) => {
    res.json(`deleting video with id ${req.params.id}`)
}

export const getVideos: RequestHandler = (req, res) => {
    res.json('getting videos')
}
export const getVideo: RequestHandler = (req, res) => {
    res.json(`getting video with id ${req.params.id}`)
}