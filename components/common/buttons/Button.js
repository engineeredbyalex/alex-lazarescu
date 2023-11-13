import Link from "next/link";

export function OutlineButton(props) {
    return (
        <Link className="button button_outline button_outline_slide_right" href={'/'}>
            <h5>{props.text}</h5>
        </Link>
    )
}


export function SolidButton(props) {
    return (
        <Link className="button button_solid button_solid_transform " href={'/'}>
            <h5>{props.text}</h5>
        </Link>
    )
}