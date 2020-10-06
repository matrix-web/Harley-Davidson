import { paths } from "../gulpfile.esm"
import {src, dest} from "gulp"

function copyLibs () {
    return src(paths.libs.css.owlCarousel.src)
        .pipe(dest(paths.libs.css.owlCarousel.dist))
}

export default copyLibs