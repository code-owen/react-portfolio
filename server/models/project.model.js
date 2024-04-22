import mongoose, { model } from "mongoose";

const project = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    projectImage: {
        type: String,
        required: true
    },

    projectUrl: {
        type: String,
        required: true
    },

    teckStack: [
        {
            type: Array,
            required: true
        }
    ]
});

const Project = mongoose.model("Project", project);

export default Project;