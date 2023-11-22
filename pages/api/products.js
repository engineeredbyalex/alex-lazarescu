import { Project } from "@/model/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
    const { method } = req;
    await mongooseConnect();


    if (method === "GET") {
        if (req.query?.id) {
            res.json(await Project.findOne({ _id: req.query.id }));
        } else {
            res.json(await Project.find());
        }
    }


}
