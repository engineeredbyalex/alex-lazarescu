import React from 'react'
import Navigation_Bar from '../header/Navigation_Bar'
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

function ProjectPage({ project }) {
    return (
        <div>
            <Navigation_Bar />
        </div>
    )
}

export default ProjectPage

export async function getServerSideProps(context) {
    await mongooseConnect();
    const { id } = context.query;
    const project = await Product.findById(id);
    return {
        props: {
            product: JSON.parse(JSON.stringify(project)),
        },
    };
}