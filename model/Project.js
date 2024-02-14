import { model, Schema, models } from "mongoose";


const ProjectSchema = new Schema(
    {
        title: { type: String, required: true },
        description: String,
        price: { type: Number, required: true },
        images: [{ type: String }],


    },
    {
        timestamps: true,
    }
);

export const Project = models.Project || model("Project", ProjectSchema);
