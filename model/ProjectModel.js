import { model, Schema, models } from "mongoose"

const ProjectSchema = new Schema({
    title: string,
    description: [{ type: string }],
    images: [{ type: String }],
    link: string,

},
    { timestamps: true, }
)

export const Project = models.Project || model("Project", ProjectSchema)