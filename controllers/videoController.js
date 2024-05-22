const Video = require("../models/Video");
const postVideo = async ({Videourl,category,subCategory}) => {
    try {
        const video = new Video({
            Videourl,category,subCategory
        });
        const savedVideo = await video.save();
        return { status: true, message: 'new video created', data: savedVideo };
    }
    catch (error) {
        console.log(error);
        return {
            status: false,
            message: "500"
        }
    }
}

const getVideo = async ({ categoryId }) => {
    let and = [];
    if (categoryId && categoryId !== "" && categoryId !== "undefined") {
        and.push({ category: categoryId });
    }

    if (and.length === 0) {
        and.push({});
        return { status: true, data: [] };
    }

    const data = await Video.find({ $and: and });
    return { status: true, data };
};


module.exports = {
   postVideo,
   getVideo
}