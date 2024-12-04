const cloudinary = require('../config/cloudinary');
const User = require('../models/User');

const updateProfile = async (req, res) => {
    try {
        const { image, ...otherData } = req.body;

        let updatedData  = otherData;

        if(image) {
            if(image.startsWith("data:image")) {
                try {
                    const uploadResponse  = await cloudinary.uploader.upload(image);
                    updatedData.image = uploadResponse.secure_url;
                } catch (error) {
                    console.error("Error uploading image:", uploadError);

                    return res.status(400).json({
						success: false,
						message: "Error uploading image",
					});
                }
            }
        }

        const updatedUser = await User.findByIdAndUpdate(req.user.id, updatedData, {new: true});
        res.status(200).json({
			success: true,
			user: updatedUser,
		});
    } catch (error) {
        console.log("Error in updateProfile: ", error);
		res.status(500).json({
			success: false,
			message: "Internal server error",
		});
    }
}

module.exports = updateProfile;